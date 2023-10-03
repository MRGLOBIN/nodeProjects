const http = require('http')
const path = require('path')
const fs = require('fs')
const url = require('url')
const { unescape } = require('querystring')

const MIME_type = {
    'html': 'text/html',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg',
    'png': 'image/png',
    'js': 'text/javascript',
    'css': 'text/css',
}

http.createServer((req, res) => {
    const uri = url.parse(req.url).pathname
    const fileName = path.join(__dirname, unescape(uri))

    console.log('loading' + uri)

    
})