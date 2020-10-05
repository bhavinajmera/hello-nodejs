var os = require('os');
require('http').createServer((req, res) => {
 res.end("My Hostnames is " +os.hostname())
}).listen(8080)
