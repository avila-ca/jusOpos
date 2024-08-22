import { jusOposRepository } from "../domain/jusOposRepository";
import { User } from "../domain/User";


export class UseCases{
    
    constructor(private readonly jusOposRepository:jusOposRepository){}

    async postRegisteredUser(newUser:User): Promise<User | null> {
        const registeredUser = this.jusOposRepository.postNewUser(newUser)
        return registeredUser
    }
}