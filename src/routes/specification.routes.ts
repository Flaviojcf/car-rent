import { Router } from "express";


import { createSpeficiationController } from "../modules/cars/useCases/createSpecification";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpeficiationController.handle(request, response);
});
