import { UseCases } from "../../application/UseCases";
import { MongoJusOposRepository } from "./mongoRepository/MongoRepository";

const jusRepo = new MongoJusOposRepository();
export const useCases = new UseCases(jusRepo)