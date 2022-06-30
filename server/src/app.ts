import "dotenv/config";
import express from "express";
import "reflect-metadata";
import config from "config";
import { buildSchema } from "type-graphql";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import logger from "./utils/logger";
import connectToDb from "./utils/connection.db";
import resolvers from "./resolvers/index.resolver";
import Context from "./types/context.types";
import { verifyJwt } from "./utils/jwt.utils";
import { User } from "./schema/user.schema";
import SessionService from "./service/session.service";
import { accTokenOptions } from "./utils/constants";
import { get } from "lodash";
import authChecker from "./utils/authChecker.utils";

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers,
    authChecker,
  });

  const app = express();

  app.use(cookieParser());

  const server = new ApolloServer({
    schema,
    context: async (ctx: Context) => {
      const {
        req: { cookies },
      } = ctx;
      const accessToken = get(cookies, "accessToken");
      const refreshToken = get(cookies, "refreshToken");

      // logger.info({ accessToken, refreshToken });

      if (accessToken) {
        const { decoded, expired } = verifyJwt<Omit<User, "password">>({
          token: accessToken,
          isAccToken: true,
        });
        if (decoded) {
          ctx.user = decoded;
          return ctx;
        }

        // logger.info({ refreshToken });
        if (expired && refreshToken) {
          const sessionService = new SessionService();
          const newAccToken = await sessionService.reIssueNewAccToken(
            refreshToken
          );

          // logger.info({ newAccToken });
          if (newAccToken) {
            ctx.res.cookie("accessToken", newAccToken, accTokenOptions);
            const { decoded } = verifyJwt<Omit<User, "password">>({
              token: newAccToken,
              isAccToken: true,
            });
            ctx.user = decoded;
            return ctx;
          }
        }
      }
      return ctx;
    },
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await server.start();

  server.applyMiddleware({ app });

  const port = config.get<number>("port");

  app.listen({ port }, () => {
    logger.info(`Server is running on PORT ${port}`);
  });

  await connectToDb();
};

bootstrap();
