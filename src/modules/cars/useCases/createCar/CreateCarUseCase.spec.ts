import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      brand: "Test brand",
      category_id: "category",
      daily_rate: 100,
      description: "Test description",
      fine_amount: 60,
      license_plate: "TEST-1234",
      name: "Test Name",
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        brand: "Test brand",
        category_id: "category",
        daily_rate: 100,
        description: "Test description",
        fine_amount: 60,
        license_plate: "TEST-1234",
        name: "Test Name",
      });

      await createCarUseCase.execute({
        brand: "Test brand",
        category_id: "category",
        daily_rate: 100,
        description: "Test description",
        fine_amount: 60,
        license_plate: "TEST-1234",
        name: "Test Name2",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with available true by default", () => {
    expect(async () => {
      const car = await createCarUseCase.execute({
        brand: "Test brand",
        category_id: "category",
        daily_rate: 100,
        description: "Test description",
        fine_amount: 60,
        license_plate: "ABCD-1234",
        name: "Car available",
      });
      expect(car.available).toBe(true);
    });
  });
});
