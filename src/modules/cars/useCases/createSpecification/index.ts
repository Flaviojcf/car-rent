import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationRepository();

const createSpecificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);

export const createSpeficiationController = new CreateSpecificationController(
  createSpecificationsUseCase
);
