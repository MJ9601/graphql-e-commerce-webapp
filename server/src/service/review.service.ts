import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Review, ReviewModel } from "../schema/review.schema";

class ReviewService {
  async createReview(input: Pick<Review, "description" | "user">) {
    return ReviewModel.create(input);
  }

  async createReviewAndRate(
    input: Pick<Review, "description" | "user" | "rate">
  ) {
    return ReviewModel.create(input);
  }

  async findOneReview(query: FilterQuery<Review>) {
    return ReviewModel.findOne(query).lean();
  }

  async findReviews(query: FilterQuery<Review> = {}) {
    return ReviewModel.find(query).lean();
  }

  async findOneReviewAndUpdate(
    query: FilterQuery<Review>,
    update: UpdateQuery<Review>,
    options: QueryOptions = {}
  ) {
    return ReviewModel.findOneAndUpdate(query, update, options).lean();
  }

  async deleteOneReview(query: FilterQuery<Review>) {
    return ReviewModel.findOneAndDelete(query).lean();
  }

  async deleteOneProductReveiws(query: FilterQuery<Review>) {
    return ReviewModel.deleteMany(query);
  }
}

export default ReviewService;
