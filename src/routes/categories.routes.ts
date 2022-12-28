import { ListCategoriesController } from "./../modules/cars/useCases/ListCategories/ListCategoriesController";
import { ImportCategoryController } from "./../modules/cars/useCases/importCategory/ImportCategoryController";
import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "./../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
