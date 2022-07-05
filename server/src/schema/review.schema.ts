import {
  getModelForClass,
  ModelOptions,
  prop,
  Ref,
} from "@typegoose/typegoose";
import { IsNumber, Max, Min } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Product } from "./product.schema";
import { User } from "./user.schema";
@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
@ObjectType()
export class Review {
  @Field(() => ID)
  _id: string;

  @Field(() => Date)
  readonly createdAt: Date;

  @Field(() => Date)
  readonly updatedAt: Date;

  @Field(() => User)
  @prop({ required: true, ref: User })
  user: Ref<User>;

  @Field(() => String)
  @prop({ required: true })
  productId: Ref<Product>;

  @Field(() => String)
  @prop({ required: true })
  description: string;

  @Field(() => Number)
  @prop({ default: 0 })
  rate: number;
}

export const ReviewModel = getModelForClass<typeof Review>(Review);

@InputType()
export class CreateReviewInput {
  @Field()
  productId: string;

  @Field()
  description: string;
}

@InputType()
export class CreateRateInput {
  @IsNumber()
  @Min(1)
  @Max(5)
  @Field()
  rate: number;

  @Field()
  productId: string;
}

// mo
@InputType()
export class CreateRateAndReviewInput extends CreateRateInput {
  @Field()
  description: string;
}

@InputType()
export class EditReviewInput extends CreateRateAndReviewInput {
  @Field()
  _id: string;

  @Field()
  productId: string;
}

@InputType()
export class DelReviewInput {
  @Field()
  _id: string;
}

@InputType()
export class DelReviewOnProductInput {
  @Field()
  productId: string;
}
