import { ExtractJwt,Strategy, JwtFromRequestFunction } from 'passport-jwt'
import userModel from '../component/user/userModel'
import passport from 'passport'
import config from '../config'

interface Options {
    jwtFromRequest:JwtFromRequestFunction
    secretOrKey: any
}

let opts:Options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : config.JWT_SECRET,
}

passport.use(new Strategy(opts, async (jwt_payload, done) => {
    const doc = await userModel.findById(jwt_payload.id)

    if(!doc) {
        return done(new Error('Not found User'),null)
    }
    
    const user = {
        _id: doc._id,
        username: doc.username,
        surname: doc.surname,
        lastname: doc.lastname,
        email: doc.email,
        avatar: doc.avatar
    }
    return done(null, user)
}));

export default passport.authenticate('jwt', { session: false });