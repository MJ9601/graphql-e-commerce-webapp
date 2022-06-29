import {
  getModelForClass,
  modelOptions,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { CreateNormalUserInput, User } from "./user.schema";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@ObjectType()
export class Session {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  @prop({ required: true, ref: () => User })
  user: Ref<User>;

  @Field(() => String)
  @prop({ default: true, type: Boolean })
  valid: boolean;

  @Field(() => String)
  @prop({ type: String })
  userAgent: string;
}

export const SessionModel = getModelForClass<typeof Session>(Session);

@ObjectType()
export class LoginObject {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}

@InputType()
export class LoginInput extends CreateNormalUserInput {}
