var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()
const auth = require('json-server-auth')

server.use(middlewares)
server.use(router)
server.use(auth);
server.listen(3000, function () {
  console.log('JSON Server is running')
})