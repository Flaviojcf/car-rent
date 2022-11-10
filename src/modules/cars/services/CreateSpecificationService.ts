import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAlreadyExistis =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExistis) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
