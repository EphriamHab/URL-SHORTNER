import express from 'express'
const {connectTOMongodb} = require('./connect')
const urlRoute = require('./routes/url')
const app = express()
const PORT = 8001

app.use('/url', urlRoute)

app.listen(PORT, ()=>console.log(`server started at PORT:${PORT}`))