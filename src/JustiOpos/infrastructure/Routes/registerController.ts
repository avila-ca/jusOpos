import { Request, Response } from "express";
import {UserModel} from '../mongoDB/mongoModel/UserSchema'

export const registerController = async (req:Request, res:Response) =>{
    const {name, email, pass} = req.body

    console.log(name,email, pass)
   
    res.send({
        name: name,
        email:email,
        pass: pass
        })
}   