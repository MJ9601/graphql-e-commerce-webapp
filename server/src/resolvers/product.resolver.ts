import { ApolloError } from "apollo-server";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateProductInput,
  FilterProduct,
  GetProduct,
  Product,
  UpdateProductInput,
} from "../schema/product.schema";
import CategoryService from "../service/category.service";
import ProductService from "../service/product.service";
import ReviewService from "../service/review.service";
import UserService from "../service/user.service";
import Context from "../types/context.types";

@Resolver()
export default class ProductResolver {
  constructor(
    private reviewService: ReviewService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.productService = new ProductService();
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

    const newProduct = await this.productService.createProduct({
      user,
      ...input,
    });
    const category = await this.categoryService.updateCat(
      { _id: input.category },
      { $addToSet: { products: newProduct._id } },
      { new: true }
    );

    return newProduct;
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
    return updateProduct;
  }

  // @Authorized()

  // @Authorized()
  @Authorized()
  @Mutation(() => String)
  async deleteAllProducts(@Ctx() context: Context) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    const deleteProducts = await this.productService.deleteProducts();

    return "All Products have been removed";
  }

  @Authorized()
  @Mutation(() => String)
  async deleteOneProduct(
    @Arg("input") input: GetProduct,
    @Ctx() context: Context
  ) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    const deleteProduct = await this.productService.deleteOneProduct(input);

    return "Product has been removed";
  }

  @Query(() => [Product])
  async allProducts() {
    const allProducts = await this.productService.findProducts();
    // console.log(allProducts);
    return allProducts;
  }

  @Query(() => [Product])
  async filterProductsBaseOnCat(@Arg("input") input: FilterProduct) {
    const product = await this.productService.findProducts(input);
    // console.log(product);
    return product;
  }

  @Query(() => Product)
  async product(@Arg("input") input: GetProduct) {
    const product = await this.productService.findOneProduct(input);

    if (!product) throw new ApolloError("NotFound!");

    // const reviews = product?.reviews.map(
    //   async (review) => await this.reviewService.findOneReview({ _id: review })
    // );
    // const category = await this.categoryService.findOneCat({
    //   _id: product?.category,
    // });

    console.log(product);

    return { ...product };
  }
}
