import { jusOposRepository } from "../../../domain/jusOposRepository";
import { User } from "../../../domain/User";
import { UserModel } from "../mongoModel/UserSchema"

export class MongoJusOposRepository implements jusOposRepository {
    async postLogin(user: User): Promise<User | null> {
        try {
            const userExist = await UserModel.find({ name: user.name, pass: user.pass })
            if (userExist.length > 0)
                console.log(`welcome ${user.name}`)
            else
                console.log(`Something wrong in your credentials`)
        } catch (error) {

        }
        return null
    }

    async postNewUser(newUser: User): Promise<User | null> {
        let isRegistered;
        let createUser;

        try {
            isRegistered = await UserModel.find({ name: newUser.email })
            if (isRegistered.length > 0) {
                console.log('User exists')
            } else {
                console.log('Registered')
                createUser = await UserModel.create({
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    pass: newUser.pass,
                    token: newUser.token
                })
                console.log(createUser._id.toString())
                return {
                    id: createUser._id.toString(),
                    name: newUser.name,
                    email: newUser.email,
                    pass: newUser.pass,
                    token: ''
                }
            }
        } catch (error) {
            console.log(error)
        }
        return null
    }
}