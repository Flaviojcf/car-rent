import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
