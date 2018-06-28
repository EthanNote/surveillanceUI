var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  setDisplayValue(parseInt(`${msg}`))
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

var port=9999;

server.bind(port);
document.getElementById("port").innerHTML="UDP port: "+port;

console.log('hello')