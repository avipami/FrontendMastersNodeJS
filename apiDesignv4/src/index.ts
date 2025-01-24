import * as dotenv from 'dotenv'
dotenv.config() // checks .env file and makes everything available on process

import app from './server'

app.listen(3001, () => {
    console.log('hello on localhost:3001')
})