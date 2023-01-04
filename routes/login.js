const Data = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = async (req,res) => {
    const user = await Data.findOne({username: req.body.username})
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            const USER = user.toObject()
            delete USER.password
            const token = jwt.sign(USER, process.env.SECRET, {expiresIn: '15s'})
            res.cookie('token', token, {
                httpOnly: true
            })
            res.redirect('/home')
        } else {
            req.flash('msgdanger', 'Password Incorrect')
            res.redirect('/login')
        }
    } else {
        req.flash('msgdanger', 'There is no such data')
        res.redirect('/login')
    }
}