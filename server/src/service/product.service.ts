import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Product, ProductModel } from "../schema/product.schema";

export default class ProductService {
  async createProduct(input: Omit<Product, "_id" | "productId" | "reviews">) {
    return ProductModel.create(input);
  }

  async findProducts(query: FilterQuery<Product> = {}) {
    return ProductModel.find(query).lean();
  }

  async findOneProduct(query: FilterQuery<Product>) {
    return ProductModel.findOne(query).lean();
  }

  async findOneProductAndUpdate(
    query: FilterQuery<Product>,
    update: UpdateQuery<Product>,
    options: QueryOptions = {}
  ) {
    return ProductModel.findOneAndUpdate(query, update, options).lean();
  }

  async deleteOneProduct(query: FilterQuery<Product>) {
    return ProductModel.deleteOne(query);
  }

  async deleteProducts(query: FilterQuery<Product>) {
    return ProductModel.deleteMany(query);
  }
}
