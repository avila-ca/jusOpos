import { Router } from "express";
import { loginController } from "./loginController";
import { registerController } from "./registerController";

export const appRouter = Router()


appRouter.post('/login', loginController)
appRouter.post('/register', registerController)
