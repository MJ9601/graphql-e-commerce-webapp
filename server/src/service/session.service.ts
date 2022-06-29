import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Session, SessionModel } from "../schema/session.schema";

class SessionService {
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
}

export default SessionService;
