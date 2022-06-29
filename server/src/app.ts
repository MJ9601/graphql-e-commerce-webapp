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

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers,
    // authChecker
  });

  const app = express();

  app.use(cookieParser());

  const server = new ApolloServer({
    schema,
    context: (ctx) => {
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
