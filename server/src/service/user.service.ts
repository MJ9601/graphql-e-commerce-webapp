import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import {
  CreateAdminUserInput,
  CreateNormalUserInput,
  User,
  UserModel,
} from "../schema/user.schema";

class UserService {
  async createUser(input: CreateNormalUserInput) {
    return UserModel.create(input);
  }

  async findOneUserAndUpdate(
    query: FilterQuery<CreateAdminUserInput>,
    update: UpdateQuery<CreateAdminUserInput>,
    options: QueryOptions = {}
  ) {
    return await UserModel.findOneAndUpdate(query, update, options).lean();
  }

  async findOneUser(query: FilterQuery<CreateAdminUserInput>) {
    return UserModel.findOne(query).lean();
  }

  async findAllUser(query: FilterQuery<CreateAdminUserInput> = {}) {
    return UserModel.find(query);
  }

  async verifyUserPassword({
    email,
    password,
  }: {
    email: User["email"];
    password: User["password"];
  }) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) return false;

      const isValid = await user.validatePassword(password);
      return !isValid ? false : user.toJSON();
    } catch (err: any) {
      return false;
    }
  }

  // async updateUserPassword(
  //   email: User["password"],
  //   newPassword: User["password"]
  // ) {
  //   const user = await UserModel.findOne({ email });
  //   if (!user) return false;
  //   await user.hashNewPassword(newPassword);

  //   return user;
  // }
}

export default UserService;
