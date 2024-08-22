import { jusOposRepository } from "../../../domain/jusOposRepository";
import { User } from "../../../domain/User";
import {UserModel} from "../mongoModel/UserSchema"

export class MongoJusOposRepository implements jusOposRepository{
    
    async postNewUser(newUser: User): Promise<User | null> {
        try {
            const isRegistered = await UserModel.find({name:newUser.email})
            if (isRegistered.length > 0) {
                console.log('User exists')

            }else{
                console.log('Registered')
                const createUser = await UserModel.create( {
                    name: newUser.name,
                    email: newUser.email,
                    pass: newUser.pass,
                })
                const listUsers = await UserModel.find()
                console.log(createUser._id.toString())
            }
        } catch (error) {
        
        }
        return null
    }
}