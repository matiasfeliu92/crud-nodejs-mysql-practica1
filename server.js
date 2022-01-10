const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes/routes')

const app = express()

//Setting Port//
app.set('port', process.env.PORT || 3000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'library'
}

//Setting Middlewares//
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//Routes//
app.get('/', (req, res) => {
    res.send('Welcome to my API Library')
})

app.use('/api', routes)

//Server Running//
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})