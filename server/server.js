require('dotenv').config()
const express = require('express')

const app = express()

const http = require('http')

const server = http.createServer(app)

const port = process.env.PORT || 5000


server.listen(port, ()=>{
  console.log(`server listening on ${port}`)
})