import { ApolloError } from "apollo-server";
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import {
  CreateAdminUserInput,
  CreateNormalUserInput,
  UpdateUserPasswordInput,
  User,
} from "../schema/user.schema";
import UserService from "../service/user.service";
import Context from "../types/context.types";
import logger from "../utils/logger";

@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
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
  allUsers(@Ctx() context:Context) {
    const {Admin, _id:user} = context.user!

    if(!Admin) throw new ApolloError("UnAuthorized!")
    const users = this.userService.findAllUser()
  }


  // Add product to shopping list
  //  remove a product from shopping list
  // remove all products form shopping list
  // add product to bought list
}
