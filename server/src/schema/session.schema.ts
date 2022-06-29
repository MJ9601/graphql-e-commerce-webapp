import { InputType } from "type-graphql";
import { CreateNormalUserInput } from "./user.schema";










@InputType()
export class LoginInput extends CreateNormalUserInput {}