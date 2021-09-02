import { Router } from "express"
import { postTweet,getTweet,getAllTweet } from './tweetController'
import auth from '../../handler/auth'
const route = Router()

route.post('/tweets',auth,postTweet)
route.get('/tweets/:id',getTweet)
route.get('/tweets',getAllTweet)


export default route