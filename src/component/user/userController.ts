import { NextFunction, Request, Response } from 'express'
import { addUser,checkUser } from './userService'


interface IUser {
    username: string
    surname: string
    lastname: string
    email: string
    password: string
    avatar: string
}

export const signup = async(req: Request,res: Response,next:NextFunction) => {
    try{
        const data:IUser = {
            username: req.body.username,
            surname: req.body.surname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar
        }
        await addUser(data)
        res.status(201).json({
            status: 201,
            message: "Signup success !",
        })
    }catch(err){
        next(err)
    }
}

export const signin = async (req: Request,res: Response,next:NextFunction) => {
    try {
        const data: {email: string, password: string} = {
            email: req.body.email,
            password: req.body.password
        }
        const token = await checkUser(data)
        res.status(200).json({
            status:200,
            message: "Login Success",
            token: token
        })
    }catch(err) {
        next(err)
    }
}