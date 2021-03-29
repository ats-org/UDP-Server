var dgram = require('dgram');
var client = dgram.createSocket('udp4');
// let amount = 1000000;
// let counter = 0;
let m = `$$1234123,7001,01/27/2021,23:40:31,40.607795,-113.012961,1450,0.0,160.6,15,1.5,12.437,31,0,3,0,0.0,0.0,0,0,0,2##`;
let buf = new Buffer.from(m);
let port = 8091
let ip = 'localhost'
// do {
//     client.send(buf, 8090, '127.0.0.1');
//     ++counter;
// } while (counter < amount);
client.send(buf, port, ip, function(err, bytes) {
    console.log('sent', bytes, err)
    client.close();
});