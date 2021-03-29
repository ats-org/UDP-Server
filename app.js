const dgram = require('dgram');
this.server;
init();

function init() {
    this.server = dgram.createSocket({
        type: 'udp4'
    });

    this.server.on('listening', () => {
        const address = this.server.address();
        console.log(Date());
        console.log('\n=================================================\nUDP LISTENER running at port ' +
            `${address.port}` + `\n Worker ${process.pid} is listening on ${address.address}` +
            '\n=================================================\n'
        );
    });

    this.server.on('message', (message, rinfo) => {
        // turn buffer into a string
        console.log(rinfo)
        let buf = Buffer.from(message).toString();
        if(buf.length < 1){return}
        buf = buf.slice(2).slice(0, -2);
        console.log('rinfo', rinfo)
        console.log(buf);
    });

    this.server.bind({
        port: 8091
    });
}
