import { Request, Response, NextFunction } from 'express'
import {insert, getAll, getById} from './tweetService'
import {Tweet} from '../../type/tweet'

export const postTweet = async (req: Request, res: Response, next: NextFunction) => {
    const data:Tweet = {
        author: req.user.id,
        date: new Date().toLocaleDateString(),
        tags: req.body.tags,
        text: req.body.text
    }
    try {
        const tweet = await insert(data)
        if (tweet != true) throw new Error
        res.status(200).json({
            status: 200,
            message: "Tweet Complete."
        })
    }catch(err) {
        next(err)
    }
}

export const getAllTweet = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getAll()
        if(!data) {
            const err = new Error("Something went wrong.")
        }
        res.status(200).json({
            status: 200,
            data: data
        })
    }catch(err) {
        next(err)
    }
}

export const getTweet = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {
        const data: Tweet = await getById(id)
        res.status(200).json({
            status: 200,
            data: data
        })
    }catch(err) {
        next(err)
    }
}




