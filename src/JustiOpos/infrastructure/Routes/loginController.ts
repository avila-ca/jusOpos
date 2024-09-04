import { Request, Response } from "express";
import { useCases } from "../mongoDB/mongoDependencyInjection";

export const loginController = (req:Request, res:Response) =>{
    const {name, pass} = req.body

    console.log(name, pass)
    useCases.postLoginUser({
        id:'',
        name: name,
        email:'',
        pass: pass,
        token:''
        })
}   