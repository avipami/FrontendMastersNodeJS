import express from 'express'
import router from './router'

const app = express()

app.get('/', (req, res) => {
    console.log("hello there")
    res.status(200)
    res.json({message: 'hello'})
})

// the router exists after url/api/*
app.use('/api', router)

export default app