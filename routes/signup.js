const Data = require('../db')
const bcrypt = require('bcrypt')
require('dotenv').config()

const salt = bcrypt.genSaltSync(10)


module.exports = async (req,res) => {
    const hashPassword = bcrypt.hashSync(req.body.password, salt)
    const userReady = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        username: req.body.username,
        password: hashPassword
    }
    Data.insertMany(userReady).then(() => {
        req.flash('msgsuccess', 'Signup successfully')
        res.redirect('/login')
    })
}