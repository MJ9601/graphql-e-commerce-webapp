import { Resolver } from "type-graphql";

@Resolver()
export default class ProductResolver {
  // async createProduct(
  //   @Arg("input") input: CreateProductInput,
  //   @Ctx() context: Context
  // ) {
  //   const { Admin, _id: user } = context.user!;
  //   if (Admin) {
  //     const newProduct = await this.productService.createProduct({
  //       user,
  //       ...input,
  //     });
  //   }
  // }
}
