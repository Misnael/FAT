const express = require('express')
const expressLayout = require('express-layout')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const server = express()
const indexRouter = require('./Controller/index')

server.use(express.static('pubic'))

//view engine
server.set('view engine', 'ejs')
server.set('layout', 'layouts/layout')
server.use(expressLayout)
server.use(cookieParser)
server.use(express.static('public'))
server.use('/', indexRouter)

server.listen(process.env.UwU, ()=>{
    console.log('Daddy Alex Er Thicc');
})