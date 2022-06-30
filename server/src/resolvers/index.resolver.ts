import ProductResolver from "./product.resolver";
import ReviewResolver from "./review.resolver";
import SessionResolver from "./session.resolver";
import UserResolver from "./user.resolver";

const resolvers = [
  UserResolver,
  SessionResolver,
  ReviewResolver,
  ProductResolver,
] as const;

export default resolvers;
