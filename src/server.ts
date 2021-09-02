import app from './app'
import mongoose from 'mongoose'
import config from './config'

mongoose.connect(config.MONGO_URL,)
.then(result => {
    app.listen(8080,() => {
        console.log(`Connectd on port 3000 🌎`)
    })
})
.catch(err => {
    throw err
})
