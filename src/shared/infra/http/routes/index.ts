import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";
import { carsRoutes } from "./cars.routes";

export const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
router.use("/cars", carsRoutes)
