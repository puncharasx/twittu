import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import passport from 'passport'

import error from './handler/error'
import userRoute from './component/user/userRoute'
import tweetRoute from './component/tweet/tweetRoute'

const app = express()


app.use(cors())
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(passport.initialize())


// app.get('/:username',(req,res) => {
//     const username = req.params.username
//     redisClient.get(username,async (err, data) => {
//         if(err) {
//             res.status(500).json({
//                 message: "Something went wrong.",
//                 err
//             })
//         }
//         if(data) {
//             return res.status(200).json(JSON.parse(data))
//         } 
//         const result = await axios.get(`https://api.github.com/users/${username}`)
//         redisClient.setex(username, 60, JSON.stringify(result.data))
//         res.status(200).json(result.data) 
//     })

   

// })

app.use('/api',userRoute)
app.use('/api',tweetRoute)


app.use(error)

export default app