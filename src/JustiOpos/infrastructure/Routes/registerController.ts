import { Request, Response } from "express";

export const registerController = (req:Request, res:Response) =>{
    const {name, email, pass} = req.body

    console.log(name,email, pass)
    res.send({
        name: name,
        email:email,
        pass: pass
        })
}   