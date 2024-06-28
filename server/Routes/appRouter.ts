import { Router } from "express";
import { loginController } from "./loginController";

const appRouter = Router()

appRouter.post('/login', loginController)
