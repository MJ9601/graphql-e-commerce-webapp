import { ApolloError } from "apollo-server";
import { Arg, Authorized, Ctx, Mutation, Resolver } from "type-graphql";
import { CreateProductInput, Product } from "../schema/product.schema";
import {
  CreateRateAndReviewInput,
  CreateRateInput,
  CreateReviewInput,
  DelReviewInput,
  DelReviewOnProductInput,
  Review,
} from "../schema/review.schema";
import ProductService from "../service/product.service";
import ReviewService from "../service/review.service";
import UserService from "../service/user.service";
import Context from "../types/context.types";

@Resolver()
export default class ReviewResolver {
  constructor(
    private userService: UserService,
    private reviewService: ReviewService,
    private productService: ProductService
  ) {
    this.userService = new UserService();
    this.reviewService = new ReviewService();
    this.productService = new ProductService();
  }

  @Authorized()
  @Mutation(() => Review)
  async createReview(
    @Arg("input") { description, productId }: CreateReviewInput,
    @Ctx() context: Context
  ) {
    const { _id: user } = context.user!;

    const newReview = await this.reviewService.createReview({
      user,
      description,
      productId,
    });

    const updateProduct = await this.productService.findOneProductAndUpdate(
      { productId },
      { $addToSet: { reviews: newReview._id } },
      { new: true }
    );

    return newReview;
  }

  @Authorized()
  @Mutation(() => Review)
  async createRating(
    @Arg("input") { productId, rate }: CreateRateInput,
    @Ctx() context: Context
  ) {
    const { _id: user } = context.user!;

    const newReview = await this.reviewService.findOneReviewAndUpdate(
      { user },
      { user, rate, productId },
      { new: true, upsert: true }
    );

    if (!newReview) throw new ApolloError("something went wrong!");

    const updateProduct = await this.productService.findOneProductAndUpdate(
      { productId },
      { $addToSet: { reviews: newReview._id! } },
      { new: true }
    );

    return newReview;
  }

  @Authorized()
  @Mutation(() => Review)
  async createReviewAndRating(
    @Arg("input") { description, productId, rate }: CreateRateAndReviewInput,
    @Ctx() context: Context
  ) {
    const { _id: user } = context.user!;

    const newReview = await this.reviewService.createReviewAndRate({
      user,
      description,
      rate,
      productId,
    });

    const updateProduct = await this.productService.findOneProductAndUpdate(
      { productId },
      { $addToSet: { reviews: newReview._id } },
      { new: true }
    );

    return newReview;
  }

  // Admin only
  // delete on review
  @Authorized()
  @Mutation(() => String)
  async deleteReview(
    @Arg("input") { _id }: DelReviewInput,
    @Ctx() context: Context
  ) {
    const { Admin, _id: user } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    await this.reviewService.deleteOneReview({ _id });

    return "Deleted";
  }

  // delete all review of product
  @Authorized()
  @Mutation(() => String)
  async deleteReviewsOnProduct(
    @Arg("input") { productId }: DelReviewOnProductInput,
    @Ctx() context: Context
  ) {
    const { Admin, _id: user } = context.user!;

    if (!Admin) throw new ApolloError("Unauthorized!");

    await this.reviewService.deleteOneProductReveiws({ productId });
    return "Deleted";
  }
}
