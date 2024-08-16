import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config()

const urlDB = process.env.URI ?? 'error'

export const mongoConnection = mongoose
  .connect(urlDB)
  .then(() => console.log(`Mongo database connected!`));