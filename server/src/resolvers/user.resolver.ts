import { ApolloError } from "apollo-server";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  AddProductToUser,
  CreateAdminUserInput,
  CreateNormalUserInput,
  UpdateUserPasswordInput,
  User,
} from "../schema/user.schema";
import ProductService from "../service/product.service";
import UserService from "../service/user.service";
import Context from "../types/context.types";
import logger from "../utils/logger";

@Resolver()
export default class UserResolver {
  constructor(
    private userService: UserService,
    private productService: ProductService
  ) {
    this.userService = new UserService();
    this.productService = new ProductService();
  }

  @Mutation(() => User)
  createNormalUser(@Arg("input") input: CreateNormalUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation(() => User)
  async createAdmimUser(@Arg("input") input: CreateAdminUserInput) {
    const AdminUserArray = await this.userService.findAllUser({ Admin: true });

    logger.info({ AdminUserArray });

    if (AdminUserArray.length !== 0) return "Admin User already created!";

    return this.userService.createUser(input);
  }

  @Mutation(() => User)
  async updateUserPassword(@Arg("input") input: UpdateUserPasswordInput) {
    const { email, password, newPassword } = input;
    const validUser = await this.userService.verifyUserPassword({
      email,
      password,
    });

    if (!validUser) logger.info("invalid");

    if (!validUser) return null;

    const updatedUser = await this.userService.findOneUserAndUpdate(
      { email },
      { password: newPassword },
      { new: true }
    );

    // const updatedUser = await this.userService.updateUserPassword(
    //   email,
    //   newPassword
    // );

    return updatedUser;
  }

  // Admin only
  @Authorized()
  @Query(() => [User])
  allUsers(@Ctx() context: Context) {
    const { Admin, _id: user } = context.user!;

    if (!Admin) throw new ApolloError("UnAuthorized!");
    const users = this.userService.findAllUser();
  }

  // Add product to shopping list
  @Authorized()
  @Mutation(() => User)
  async addProductToShoppingList(
    @Arg("input") { product }: AddProductToUser,
    @Ctx() context: Context
  ) {
    const { _id } = context.user!;

    return await this.userService.findOneUserAndUpdate(
      { _id },
      { $addToSet: { shoppingCard: product } },
      { new: true }
    );
  }
  //  remove a product from shopping list
  @Authorized()
  @Mutation(() => User)
  async removeProductFromShoppingList(
    @Arg("input") { product }: AddProductToUser,
    @Ctx() context: Context
  ) {
    const { _id } = context.user!;
    const user = await this.userService.findOneUser({ _id });
    if (!user) throw new ApolloError("InValid User");
    const _product = user.shoppingCard.find((item) => item === product);
    if (!_product) throw new ApolloError("Product not exsit in shopping cart");

    const products = user.shoppingCard.filter((item) => item !== product);

    const updateUser = await this.userService.findOneUserAndUpdate(
      { _id },
      { $set: { shoppingCard: products } },
      { new: true }
    );

    return updateUser;
  }

  // remove all products form shopping list
  @Authorized()
  @Mutation(() => User)
  async removeAllProductFromShoppingList(@Ctx() context: Context) {
    const { _id } = context.user!;
    const updateUser = await this.userService.findOneUserAndUpdate(
      { _id },
      { $set: { shoppingCard: [] } },
      { new: true }
    );

    return updateUser;
  }

  // add product to boughtlist
  @Authorized()
  @Mutation(() => User)
  async addProductToBoughtList(
    @Arg("input") { product }: AddProductToUser,
    @Ctx() context: Context
  ) {
    const { _id } = context.user!;

    const user = await this.userService.findOneUser({ _id });
    if (!user) throw new ApolloError("InValid User");
    const _product = user.shoppingCard.find((item) => item === product);
    if (!_product) throw new ApolloError("Product not exsit in shopping cart");

    const products = user.shoppingCard.filter((item) => item !== product);

    const updateUser = await this.userService.findOneUserAndUpdate(
      { _id },
      {
        $set: { shoppingCard: products },
        $addToSet: { boughtProduct: product },
      },
      { new: true }
    );

    return updateUser;
  }

  @Authorized()
  @Mutation(() => User)
  async User(@Ctx() context: Context) {
    const { _id } = context.user!;

    const user = await this.userService.findOneUser({ _id });

    if (!user) throw new ApolloError("Invalid User Info");

    const shoppingCard = user.shoppingCard.map(
      async (product) =>
        await this.productService.findOneProduct({ _id: product })
    );

    return { ...user, shoppingCard };
  }
}
