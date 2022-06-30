import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { IsNumber, Max, Min } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { User } from "./user.schema";

@ObjectType()
export class Review {
  @Field(() => ID)
  _id: string;

  @Field(() => ID)
  @prop({ required: true, ref: () => User })
  user: Ref<User>;

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
  description: string;
}

@InputType()
export class CreateRateInput {
  @IsNumber()
  @Min(1)
  @Max(5)
  @Field()
  rate: number;
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
}

@InputType()
export class DelReviewInput {
  @Field()
  _id: string;
}
