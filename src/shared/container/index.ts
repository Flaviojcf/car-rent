import { UsersRepository } from "./../../modules/accounts/implementations/UsersRepository";
import { IUsersRepository } from "./../../modules/accounts/repositories/IUsersRepository";
import { SpecificationRepository } from "./../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationRepository } from "./../../modules/cars/repositories/ISpecificationRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { container } from "tsyringe";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
