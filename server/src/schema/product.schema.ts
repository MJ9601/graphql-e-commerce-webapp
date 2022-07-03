import {
  getModelForClass,
  index,
  ModelOptions,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Category } from "./category.schema";
import { Review } from "./review.schema";
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

  @Field(() => [Review], { nullable: "items" })
  @prop()
  reviews: [Ref<Review>];

  @Field(() => String)
  @prop({ default: () => `p_${nanoid()}` })
  productId: string;

  @Field(() => Category, { nullable: true })
  @prop()
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

// use IsOptionanl() as test
@InputType()
export class UpdateProductInput {
  @Field(() => ID)
  productId: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  count?: number;

  @Field({ nullable: true })
  category?: string;
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

@ObjectType()
export class ProductOnCard extends Product {
  @Field(() => Number)
  amount: number;
}
