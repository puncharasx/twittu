import { Router } from 'express'
import {signup,signin} from './userController'

const route = Router()

route.post('/signup',signup)
route.post('/signin',signin)

export default route
