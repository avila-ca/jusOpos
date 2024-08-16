import { Request, Response } from "express";
import {UserModel} from '../mongoDB/mongoModel/UserSchema'

export const registerController = async (req:Request, res:Response) =>{
    const {name, email, pass} = req.body

    console.log(name,email, pass)
    const isRegistered = await UserModel.find({name:name})
    if (isRegistered.length > 0) {
        console.log('User exists', isRegistered)
    }else{
        console.log('Registered')
        const createUser = await UserModel.create( {
            name: name,
            email: email,
            pass: pass,
          })
        const listUsers = await UserModel.find()
        console.log(listUsers)
    }
    res.send({
        name: name,
        email:email,
        pass: pass
        })
}   