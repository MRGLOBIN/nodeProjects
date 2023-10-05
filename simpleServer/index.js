const http = require('http')
const path = require('path')
const fs = require('fs')
const url = require('url')
const { unescape } = require('querystring')

const MIME_types = {
	html: 'text/html',
	jpeg: 'image/jpeg',
	jpg: 'image/jpg',
	png: 'image/png',
	js: 'text/javascript',
	css: 'text/css',
}

http
	.createServer((req, res) => {
		const uri = url.parse(req.url).pathname
		const fileName = path.join(__dirname, unescape(uri))

		console.log('loading' + uri)

		let status

		try {
			status = fs.lstatSync(fileName)
		} catch (e) {
			res.writeHead(404, { 'Content-type': 'text/plain' })
			res.write('404 Not found\n')
			res.end()
			return
		}

		if (status.isFile()) {
			let mimeType = MIME_types[path.extname(fileName).split('.')[1]]

			res.writeHead(200, { 'Content-type': mimeType })

			let fileStream = fs.ReadStream(fileName)
			fileStream.pipe(res)
		} else if (status.isDirectory()) {
			res.writeHead(302, { Location: 'index.html' })
			res.end()
		} else {
			res.writeHead(500, { 'Content-type': 'text/plain' })
			res.write('500 Internal Error\n')
			res.end()
		}
	})
	.listen(3000, () => {
		console.log('server listening')
	})
