import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepositry = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositry);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
