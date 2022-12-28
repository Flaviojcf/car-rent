import { AppError } from "./../errors/AppError";
import UsersRepository from "./../modules/accounts/implementations/UsersRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "6e7b2ce2952496d9a8968259e8c2a3d4"
    ) as IPayLoad;

    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User doesn't exist", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
