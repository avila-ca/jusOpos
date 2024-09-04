import { User } from "./User";

export interface jusOposRepository{
    postNewUser(newUser:User):Promise<User | null>
    postLogin(user:User):Promise<User | null>
}