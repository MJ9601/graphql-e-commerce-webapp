import { SessionResolver } from "./session.resolver";
import { UserResolver } from "./user.resolver";

const resolvers = [UserResolver, SessionResolver] as const;

export default resolvers;
