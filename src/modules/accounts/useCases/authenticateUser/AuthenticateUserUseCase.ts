import { AppError } from './../../../../errors/AppError';
import { IUsersRepository } from "./../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);


    if (!user) {
      throw new AppError("Email or password incorrect");
    }
    const passwordMatch = await compare(password, user.password);
    console.log(password)
    console.log(user.password)

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }
    const token = sign({}, "6e7b2ce2952496d9a8968259e8c2a3d4", {
      subject: user.id,
      expiresIn: "1d",
    });
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}
