import {
  getModelForClass,
  index,
  ModelOptions,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";
import { Field, ID, InputType, InputType, ObjectType } from "type-graphql";
import { User } from "./user.schema";

const nanoid = customAlphabet(
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890",
  10
);

@index({ productId: 1 })
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  @prop({ required: true, ref: () => User })
  user: Ref<User>;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @Field(() => String)
  @prop({ required: true })
  description: string;

  @Field(() => String)
  @prop({ required: true })
  price: number;

  @Field(() => String)
  @prop({ required: true })
  count: number;

  @Field(() => String)
  @prop({ required: true })
  image: string;

  @Field(() => [ID])
  @prop({ default: [] })
  reviews: [string];

  @Field(() => String)
  @prop({ default: () => `p_${nanoid()}` })
  productId: string;

  @Field(() => ID)
  @prop({ ref: () => Category })
  category: Ref<Category>;
}

export const ProductModel = getModelForClass<typeof Product>(Product);

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  price: number;

  @Field(() => String)
  image: string;

  @Field(() => String)
  count: number;

  @Field(() => ID)
  category: string;
}

@InputType()
export class UpdateProductInput extends CreateProductInput {
  @Field(() => ID)
  productId: string;
}

@InputType()
export class UpdateProductReviews {
  @Field(() => [ID])
  review: [string];

  @Field(() => String)
  productId: string;
}

@InputType()
export class FilterProduct {
  @Field(() => ID)
  category: string;
}

@InputType()
export class GetProduct {
  @Field(() => ID)
  productId: string;
}
