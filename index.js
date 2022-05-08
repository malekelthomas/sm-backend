const express = require('express')
const mongoose = require('mongoose')
const app = express()
const User = require('./models/user')
const bodyParser = require('body-parser')



app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post('/user', async (req, res) => {

    const { uuid, firstName, lastName, username, profilePicture, followers, following } = req.body
    const newUser = User({
        uuid,
        firstName,
        lastName,
        username,
        profilePicture,
        followers,
        following
    })

    await newUser.save()

    res.send("New user created")

})


const port = 8080
const mongoConn = "mongodb://localhost:27017/social"

mongoose
    .connect(mongoConn)
    .then(() => {
        console.log(`Connected to mongodb running on: ${mongoConn}`)
        app.listen(port, () => {
            console.log(`Running on port ${port}`)
        })
    })
