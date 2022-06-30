import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { Category, CategoryModel } from "../schema/category.schema";

export default class CategoryService {
  async createCat(input: Pick<Category, "name">) {
    return CategoryModel.create(input);
  }

  async updateCat(
    query: FilterQuery<Category>,
    update: UpdateQuery<Category>,
    options: QueryOptions = {}
  ) {
    return CategoryModel.findOneAndUpdate(query, update, options).lean();
  }

  async findOneCat(query: FilterQuery<Category>) {
    return CategoryModel.findOne(query).lean();
  }

  async findCats(query: FilterQuery<Category>) {
    return CategoryModel.find(query).lean();
  }

  async deleteOneCat(query: FilterQuery<Category>) {
    return CategoryModel.deleteOne(query);
  }

  async deleteCats(query: FilterQuery<Category> = {}) {
    return CategoryModel.deleteMany(query);
  }
}
