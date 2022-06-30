import { ApolloError } from "apollo-server";
import { get, omit } from "lodash";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { LoginInput, LoginObject } from "../schema/session.schema";
import { User } from "../schema/user.schema";
import SessionService from "../service/session.service";
import UserService from "../service/user.service";
import Context from "../types/context.types";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import config from "config";
import { accTokenOptions, refTokenOptions } from "../utils/constants";

@Resolver()
export class SessionResolver {
  constructor(
    private userService: UserService,
    private sessionService: SessionService
  ) {
    this.userService = new UserService();
    this.sessionService = new SessionService();
  }

  @Mutation(() => LoginObject)
  async login(@Arg("input") input: LoginInput, @Ctx() context: Context) {
    const { email, password } = input;
    const validUser = await this.userService.verifyUserPassword({
      email,
      password,
    });
    if (!validUser) throw new ApolloError("Invalid email or password");

    const session = await this.sessionService.createSession({
      user: validUser._id,
      userAgent: context.req.get("user-agent") || "",
    });

    const tokenPayload = {
      ...omit(validUser, "password"),
      session: session._id,
    };

    const accessToken = signJwt({
      tokenPayload,
      isAccToken: true,
      options: { expiresIn: config.get("accTokenTimeToLive") },
    });
    const refreshToken = signJwt({
      tokenPayload,
      isAccToken: false,
      options: { expiresIn: config.get("refTokenTimeToLive") },
    });

    context.res.cookie("accessToken", accessToken, accTokenOptions);
    context.res.cookie("refreshToken", refreshToken, refTokenOptions);

    return { accessToken, refreshToken };
  }

  @Mutation(() => LoginObject)
  async logout(@Ctx() context: Context) {
    const { accessToken: token } = context.req.cookies;
    const { decoded } = verifyJwt({ token, isAccToken: true });

    if (!decoded) throw new ApolloError("Invalid Token");

    const deleteSession = await this.sessionService.findOneSessionAndUpdate(
      { _id: get(decoded, "session") },
      { valid: false },
      { new: true }
    );

    context.res.clearCookie("accessToken");
    context.res.clearCookie("refreshToken");

    return { accessToken: "", refreshToken: "" };
  }

  @Query(() => User)
  me(@Ctx() context: Context) {
    const { accessToken: token } = context.req.cookies;
    const { decoded } = verifyJwt({ token, isAccToken: true });
    if (!decoded) throw new ApolloError("Invalid Token");

    return decoded;
  }
}
