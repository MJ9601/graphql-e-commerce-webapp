import { AuthChecker } from "type-graphql";
import Context from "../types/context.types";

const authChecker: AuthChecker<Context> = ({ context }) => !!context.user;

export default authChecker;
