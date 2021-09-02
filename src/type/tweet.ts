import { Schema } from 'mongoose'

export interface Tweet {
    author: Schema.Types.ObjectId | string
    text: string
    date: string
    tags: string[]
}

export type ObjectId = Schema.Types.ObjectId