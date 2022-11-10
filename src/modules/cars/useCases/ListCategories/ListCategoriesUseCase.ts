import { Category } from "../../model/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categoreis = this.categoriesRepository.list();

    return categoreis;
  }
}
