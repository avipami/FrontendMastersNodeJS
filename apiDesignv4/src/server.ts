import express from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'
const app = express()

app.use(morgan('dev')) //middleware for console logging
app.use(express.json()) // allows a client to send a json
app.use(express.urlencoded({extended: true})) // this puts json into an object

app.use((req, res, next) => {
    next()
})

app.get('/', (req, res) => {
    console.log("hello there")
    res.status(200)
    res.json({message: 'hello'})
})

// the router exists after url/api/*
app.use('/api', protect, router) //protect is the middleware for jwt auth

app.post('/user', createNewUser)
app.post('/signin', signin)

export default app