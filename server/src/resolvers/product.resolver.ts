import { ApolloError } from "apollo-server";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateProductInput,
  FilterProduct,
  GetProduct,
  Product,
  UpdateProductInput,
} from "../schema/product.schema";
import { LoginInput } from "../schema/session.schema";
import CategoryService from "../service/category.service";
import ProductService from "../service/product.service";
import ReviewService from "../service/review.service";
import UserService from "../service/user.service";
import Context from "../types/context.types";

@Resolver()
export default class ProductResolver {
  constructor(
    private userService: UserService,
    private reviewService: ReviewService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService = new ProductService();
    this.userService = new UserService();
    this.reviewService = new ReviewService();
    this.categoryService = new CategoryService();
  }

  @Authorized()
  @Mutation(() => Product)
  async createProduct(
    @Arg("input") input: CreateProductInput,
    @Ctx() context: Context
  ) {
    const { Admin, _id: user } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    return await this.productService.createProduct({
      user,
      ...input,
    });
  }

  @Authorized()
  @Mutation(() => Product)
  async updateProductDetails(
    @Arg("input") input: UpdateProductInput,
    @Ctx() context: Context
  ) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    const { productId, ...updated } = input;
    const updateProduct = await this.productService.findOneProductAndUpdate(
      { productId },
      updated,
      { new: true }
    );
  }

  // @Authorized()

  @Query(() => [Product])
  async allProducts() {
    return this.productService.findProducts();
  }

  @Query(() => [Product])
  async filterProductsBaseOnCat(@Arg("input") input: FilterProduct) {
    return this.productService.findProducts(input);
  }

  @Query(() => Product)
  async product(@Arg("input") input: GetProduct) {
    const product = await this.productService.findOneProduct(input);

    if (!product) throw new ApolloError("NotFound!");

    const reviews = product?.reviews.map(
      async (review) => await this.reviewService.findOneReview({ _id: review })
    );
    const category = await this.categoryService.findOneCat({
      _id: product?.category,
    });

    return { ...product, reviews, category };
  }
}
