import { ApolloError } from "apollo-server";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  AddProductToCat,
  Category,
  CreateCategory,
  DelCategory,
} from "../schema/category.schema";
import CategoryService from "../service/category.service";
import ProductService from "../service/product.service";
import UserService from "../service/user.service";
import Context from "../types/context.types";

@Resolver()
export default class CategoryResolver {
  constructor(
    private userService: UserService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.userService = new UserService();
    this.productService = new ProductService();
    this.categoryService = new CategoryService();
  }

  // create category
  @Authorized()
  @Mutation(() => Category)
  async createCat(
    @Arg("input") { name }: CreateCategory,
    @Ctx() context: Context
  ) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    return await this.categoryService.createCat({ name });
  }
  // update one
  @Authorized()
  @Mutation(() => Category)
  async addProductToCat(
    @Arg("input") { _id, products }: AddProductToCat,
    @Ctx() context: Context
  ) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    return await this.categoryService.updateCat(
      { _id },
      { $addToSet: { products } },
      { new: true }
    );
  }
  // delete one
  @Authorized()
  @Mutation(() => Category)
  async delCat(@Arg("input") { _id }: DelCategory, @Ctx() context: Context) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    return await this.categoryService.deleteOneCat({ _id });
  }

  // delete all
  @Authorized()
  @Mutation(() => Category)
  async delAllCats(@Ctx() context: Context) {
    const { Admin } = context.user!;
    if (!Admin) throw new ApolloError("Unauthorized!");

    return await this.categoryService.deleteCats();
  }

  // get one
  @Query(() => Category)
  async Category(@Arg("input") input: DelCategory) {
    const category = await this.categoryService.findOneCat(input);

    const products = category?.products.map(
      async (product) =>
        await this.productService.findOneProduct({ _id: product })
    );

    return { ...category, products };
  }

  // get all
  @Query(() => [Category])
  async allCategories() {
    const categories = await this.categoryService.findCats();

    return categories;
  }
  // get with filter
}
