import { Schema ,model } from 'mongoose'
import {Tweet} from '../../type/tweet'

const TweetSchema = new Schema<Tweet>({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    text: {type: String, required: true},
    date: { type: String, required: true },
    tags: [String]
})


const postModel = model('Tweet',TweetSchema)

export default postModel


