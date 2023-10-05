const express = require('express')
const mailer = require('nodemailer')
const path = require('path')
const pug = require('pug')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', "pug")

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.render('index',{
		firstHouse: "simple Houses",
		secondHouse: "Already Furnished"
	})
})

app.get('/a', (req, res) => {
	res.sendFile('./public/')
})

app.listen(3000)
