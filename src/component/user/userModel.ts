import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'

interface User {
    username: string
    surname: string
    lastname: string
    email: string
    password: string
    bio: string
    avatar: string
    follow: []
    following: []
}

const UserSchema = new Schema<User>({
    username: {type: String, required: true, unique: true},
    surname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    bio: {type: String, trim: true},
    avatar: {type: String, default: "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"},
    follow : [{type:Schema.Types.ObjectId, ref: 'User' }],
    following: [{type:Schema.Types.ObjectId, ref: 'User' }],
},{
    timestamps: true
})

export const hashPassword = async (password: string) => {
    const hash = await bcrypt.hash(password,10)
    return hash
}

export const checkPassword = async (password: string, hashPassword: string) => {
    const result = await bcrypt.compare(password,hashPassword)
    return result
}

const userModel = model('User',UserSchema)

export default  userModel