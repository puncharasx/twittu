import userModel, { hashPassword,checkPassword } from './userModel'
import jwt from 'jsonwebtoken'
import config from '../../config'

interface IUser {
    username: string
    surname: string
    lastname: string
    email: string
    password: string
    avatar: string
}

interface IPayload {
    id: string
}

interface IError {
    message?: string | undefined
    status?: number | undefined
}

export const addUser = async (data:IUser ) => {
        try {
            const _findEmail = await userModel.findOne({ email: data.email })
            if (_findEmail) {
                const err:IError = new Error('Email exist already')
                err.status = 400
                throw err
            }
            const hashPass = await hashPassword(data.password)
            const doc = new userModel({
                username: data.username,
                surname: data.surname,
                lastname: data.lastname,
                email: data.email,
                password: hashPass,
                avatar: data.avatar,

            })
            await doc.save()
            return true
        } catch (err) {
            throw err
        }
}

export const checkUser = async (data:{ email:string,password:string }) => {
    try {
        const doc = await userModel.findOne({email: data.email})
        if(!doc) {
            const err:IError = new Error('cannot found email')
            err.status = 404
            throw err
        }
        const checkPass = await checkPassword(data.password,doc.password)
        if(!checkPass) {
            const err:IError = new Error('Password incorrect.')
            err.status = 400
            throw err
        }
        const payload:IPayload = {
            id: doc.id
        }
        const token = jwt.sign(payload,config.JWT_SECRET,{
            expiresIn:'1Days'
        })
        return token
    }catch(err) {
        throw err
    }
}