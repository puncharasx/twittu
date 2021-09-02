import model from './tweetModel'
import { Tweet } from '../../type/tweet'

export const insert = async (data:Tweet):Promise<true|false> => {
    try {
        const doc = new model({
            author: data.author,
            text: data.text,
            date: data.date,
            tags: data.tags
        })
        await doc.save()
        return true
    }catch(err) {
        throw err
    }
}

export const getAll = async () => {
    try {
        const docs:Tweet = await model.find({})
        return docs
    }catch(err) {
        throw err
    }
}

export const getById = async(_id: string) => {
    try {
        const doc = await model.find({ author: _id})
        if(!doc) {
            const err:any = new Error('Not found Id')
            err.status = 404
            throw err
        }
        return doc
    }catch(err) {
        throw err
    }
}
