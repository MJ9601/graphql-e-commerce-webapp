import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { LoginInput } from "../schema/session.schema";
import { User } from "../schema/user.schema";
import UserService from "../service/user.service";

@Resolver()
export class SessionResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Mutation()
  async login(@Arg("input") input: LoginInput) {
    const { email, password } = input;
    const validUser = await this.userService.verifyUserPassword({
      email,
      password,
    });
    if (!validUser) return null;
  }

  @Query(() => User)
  me() {
    return "string";
  }
}
