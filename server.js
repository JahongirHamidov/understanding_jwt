const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

require('dotenv').config()
app.use(express.json())

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
]

app.get('/posts',(req,res)=>{
    res.json(posts)
})
app.post('/login',(req,res)=>{
    //auth user
    const username = req.body.username
    console.log(username)
    const user = {name:username}

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken:accessToken})
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('server ulandi'))