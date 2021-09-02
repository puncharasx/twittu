import dotenv from 'dotenv'
dotenv.config()

interface ProcessEnv {
    [key: string]: any
}

const config:ProcessEnv = {
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URL:process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config