import { ICreateUsersDTO } from "./../../dtos/ICreateUserDTO";
import { IUsersRepository } from "./../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,

    email,
    password,
    driver_license,
  }: ICreateUsersDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new Error ("User already exists")
    }
    
    const passwordHash = await hash(password, 10);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}
