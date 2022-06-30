import {
  getModelForClass,
  ModelOptions,
  prop,
  Ref,
  Severity,
} from "@typegoose/typegoose";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Product } from "./product.schema";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@ObjectType()
export class Category {
  @Field(() => ID)
  _id: string;

  @Field(() => String)
  @prop({ required: true })
  name: string;

  @Field(() => [ID])
  @prop({ default: [] })
  products: [Ref<Product>];
}

export const CategoryModel = getModelForClass<typeof Category>(Category);

@InputType()
export class CreateCategory {
  @Field(() => String)
  name: string;
}

@InputType()
export class DelCategory {
  @Field(() => String)
  _id: string;
}

@InputType()
export class FindCategory extends CreateCategory {}
