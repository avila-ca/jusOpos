import { Request, Response } from "express";
//import {UserModel} from '../mongoDB/mongoModel/UserSchema'
import {useCases} from '../mongoDB/mongoDependencyInjection'

export const registerController = async (req:Request, res:Response) =>{
    const {name, email, pass} = req.body

    console.log(name,email, pass)
    useCases.postRegisteredUser({
        id:'',
        name: name,
        email:email,
        pass: pass,
        token:''
        })
}   