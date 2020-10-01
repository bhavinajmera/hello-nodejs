var os = require('os');
require('http').createServer((req, res) => {
 res.end("Hostnames is " +os.hostname())
}).listen(8080)
