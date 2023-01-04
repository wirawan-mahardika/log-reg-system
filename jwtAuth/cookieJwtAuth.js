const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports.cookieJwtAuth = (req,res,next) => {
    const token = req.cookies.token
    try {
        const user = jwt.verify(token, process.env.SECRET)
        req.user = user
        next()
    } catch (err) {
        req.flash('msgdanger','Invalid token/Request timed out')
        res.clearCookie('token')
        res.redirect('/login')
    }
}