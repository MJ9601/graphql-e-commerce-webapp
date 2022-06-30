import { get, omit } from "lodash";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Session, SessionModel } from "../schema/session.schema";
import { User } from "../schema/user.schema";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import UserService from "./user.service";
import config from "config";

class SessionService {
  // constructor(private userService: UserService) {
  //   this.userService = new UserService()
  // }

  async createSession(input: any) {
    return SessionModel.create(input);
  }

  async findUserSessions(query: FilterQuery<Session>) {
    return SessionModel.find(query).lean();
  }

  async findOneSession(query: FilterQuery<Session>) {
    return SessionModel.findOne(query).lean();
  }

  async findOneSessionAndUpdate(
    query: FilterQuery<Session>,
    update: UpdateQuery<Session>,
    options: QueryOptions = {}
  ) {
    return SessionModel.findOneAndUpdate(query, update, options).lean();
  }

  async reIssueNewAccToken(token: string) {
    const { decoded, expired } = verifyJwt<User>({ token, isAccToken: false });

    if (!decoded || !get(decoded, "session")) return false;

    const session = await SessionModel.findById(get(decoded, "session"));

    if (!session || !session.valid) return false;

    const userService = new UserService();

    const user = await userService.findOneUser({ _id: get(session, "user") });

    if (!user) return false;

    const tokenPayload = {
      ...omit(user, "password"),
      session: session._id,
    };

    const newAccToken = signJwt({
      tokenPayload,
      isAccToken: true,
      options: { expiresIn: config.get("accTokenTimeToLive") },
    });

    return newAccToken;
  }
}

export default SessionService;
