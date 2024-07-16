import { Request, Response } from "express";

export const loginController = (req:Request, res:Response) =>{
    const {name, pass} = req.body

    console.log(name, pass)
}   