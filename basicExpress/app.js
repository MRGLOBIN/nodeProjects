const express = require('express')
const mailer = require('nodemailer')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, ))
app.set('view engine', jade)

app.use(express.json())

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(3000)
