import { Resolver } from "type-graphql";
import ReviewService from "../service/review.service";
import UserService from "../service/user.service";

@Resolver()
export default class ReviewResolver {
  constructor(
    private userService: UserService,
    private reviewService: ReviewService
  ) {
    this.userService = new UserService();
    this.reviewService = new ReviewService();
  }
}
