import { inject, injectable } from "tsyringe";
import { AppError } from "./../../../../shared/errors/AppError";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private readonly carsRepository: ICarsRepository,
    @inject("SpecificationRepository")
    private readonly specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
    const carsExists = await this.carsRepository.findById(car_id);

    if (!carsExists) {
      throw new AppError("Car does not exists!");
    }
    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    );

    carsExists.specifications = specifications;

    await this.carsRepository.create(carsExists);

    return carsExists;
  }
}
