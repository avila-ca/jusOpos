import { model, Schema } from "mongoose"

export interface userSchemaInterface extends Document {
    name: string;
    email: string;
    pass: string;
}

const userSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        pass: {
            type: String,
            required: true
        },
    }
)

export const UserModel = model<userSchemaInterface>('User', userSchema, 'users');