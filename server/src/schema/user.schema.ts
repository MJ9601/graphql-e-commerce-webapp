import {
  getModelForClass,
  prop,
  pre,
  modelOptions,
  Severity,
  DocumentType,
  Ref,
} from "@typegoose/typegoose";
import { IsEmail, MaxLength, MinLength } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import argon2 from "argon2";
import logger from "../utils/logger";
import { Product, ProductOnCard } from "./product.schema";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@pre<User>("save", async function (next) {
  if (this.isModified("password")) {
    const hash = await argon2.hash(this.password);
    this.password = hash;

    return next();
  }
  return next();
})
@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;

  @Field(() => Boolean)
  @prop({ default: false })
  Admin: boolean;

  @Field(() => [Product], { nullable: "items" })
  @prop({ default: () => [] })
  shoppingCard: [Ref<Product>];

  @Field(() => [Product])
  @prop({ default: () => [] })
  boughtProduct: [Ref<Product>];

  async validatePassword(this: DocumentType<User>, passwordOnReq: string) {
    try {
      return await argon2.verify(this.password, passwordOnReq);
    } catch (err: any) {
      logger.error(err, "Couldn't verify Password!");
      return false;
    }
  }

  // async hashNewPassword(this: DocumentType<User>, newPassword: string) {
  //   this.password = await argon2.hash(newPassword);
  // //   this.save();
  // }
}

export const UserModel = getModelForClass<typeof User>(User);

@InputType()
export class CreateNormalUserInput {
  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(6, { message: "Min length of password is 6 chars" })
  @MaxLength(32, { message: "Max length of password is 32 chars" })
  @Field(() => String)
  password: string;
}

@InputType()
export class CreateAdminUserInput extends CreateNormalUserInput {
  @Field(() => Boolean)
  Admin: boolean;
}

@InputType()
export class UpdateUserPasswordInput extends CreateNormalUserInput {
  @Field(() => String)
  newPassword: string;
}

@InputType()
export class AddProductToUser {
  @Field(() => ID)
  product: string;
}
