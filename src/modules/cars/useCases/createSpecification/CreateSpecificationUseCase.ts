import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}
  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExistis =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExistis) {
      throw new AppError("Specification already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
