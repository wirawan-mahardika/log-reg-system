const express = require('express');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');

const {cookieJwtAuth} = require('./jwtAuth/cookieJwtAuth')
const signupRouts = require('./routes/signup')
const loginRouts = require('./routes/login')
const app = express()
const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(flash())
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.get('/home', (req,res) => {
    res.render('home', {
        title: 'Home Page'
    })
})

app.post('/login', loginRouts)
app.get('/login', (req,res) => {
    res.render('login', {
        title: 'Login Page',
        msgdanger: req.flash('msgdanger'),
        msgsuccess: req.flash('msgsuccess')
    })
})

app.post('/signup', signupRouts)
app.get('/signup', (req,res) => {
    res.render('signup', {
        title: 'Login Page'
    })
})

app.get('/service', cookieJwtAuth, (req,res) => {
    res.render('service', {
        title: 'Service Page'
    })
})

app.get('/about', cookieJwtAuth, (req,res) => {
    res.render('about', {
        title: 'About Page'
    })
})

app.listen(port, () => console.log('server is listening at port 3000'))