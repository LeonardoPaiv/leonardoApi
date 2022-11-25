const { request, response } = require('express');
const passport = require('passport');
const { Strategy } = require('passport-local')

const User = require('../models/authModel');
const { comparePassword } = require('../utils/helpers');

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        if (!user) throw new Error('User not found')
        done(null, user)
    } catch(e) {
        done(e, null)
    }
})

passport.use(
    new Strategy(
        async (username, password, done) => {
            try {
                if (!username || !password) {
                    throw new Error('Missing Credentials');
                }
                const userDb = await User.findOne({ username });
                if (!userDb) throw new Error('User not found');
                const isValid = comparePassword(password, userDb.password)
                if (isValid) {
                    done(null, userDb);
                } else {
                    done(null, null)
                }
            } catch (e) {
                done(e, null)
            }
        }
    )
)