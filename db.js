const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const Data = mongoose.model('data', {
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String
})

module.exports = Data