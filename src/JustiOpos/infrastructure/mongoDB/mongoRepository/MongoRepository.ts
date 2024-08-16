import { jusOposRepository } from "../../../domain/jusOposRepository";
import { User } from "../../../domain/User";

export class MongoJusOposRepository implements jusOposRepository{
    
    postNewUser(newUser: User): Promise<User | null> {
        const isRegistered = await UserModel.find({name:newUser.email})
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

    }
}