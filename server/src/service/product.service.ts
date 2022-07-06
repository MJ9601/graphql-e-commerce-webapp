import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { CategoryModel } from "../schema/category.schema";
import { Product, ProductModel } from "../schema/product.schema";
import { ReviewModel } from "../schema/review.schema";
import { UserModel } from "../schema/user.schema";

export default class ProductService {
  async createProduct(input: Omit<Product, "_id" | "productId" | "reviews">) {
    return (await ProductModel.create(input)).populate([
      {
        path: "category",
        model: CategoryModel,
      },
      {
        path: "reviews",
        model: ReviewModel,
        populate: { path: "user", model: UserModel },
      },
    ]);
  }

  async findProducts(query: FilterQuery<Product> = {}) {
    return ProductModel.find(query)
      .populate([
        {
          path: "category",
          model: CategoryModel,
        },
        {
          path: "reviews",
          model: ReviewModel,
          populate: { path: "user", model: UserModel },
        },
      ])
      .lean();
  }

  async findOneProduct(query: FilterQuery<Product>) {
    return ProductModel.findOne(query)
      .populate([
        {
          path: "category",
          model: CategoryModel,
        },
        {
          path: "reviews",
          model: ReviewModel,
          populate: { path: "user", model: UserModel },
        },
      ])
      .lean();
  }

  async findOneProductAndUpdate(
    query: FilterQuery<Product>,
    update: UpdateQuery<Product>,
    options: QueryOptions = {}
  ) {
    return ProductModel.findOneAndUpdate(query, update, options)
      .populate([
        {
          path: "category",
          model: CategoryModel,
        },
        {
          path: "reviews",
          model: ReviewModel,
          populate: { path: "user", model: UserModel },
        },
      ])
      .lean();
  }

  async deleteOneProduct(query: FilterQuery<Product>) {
    return ProductModel.deleteOne(query);
  }

  async deleteProducts(query: FilterQuery<Product> = {}) {
    return ProductModel.deleteMany(query);
  }
}
