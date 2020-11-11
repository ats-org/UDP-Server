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
        let buf = Buffer.from(message);
        let a = '';
        for(const value of buf.values()){
            let v = value.toString(16);
            let padding = 2;
            if(v.length < padding){
                v = "0" + v;
            }
            a += v;
        }
        console.log(Date());
        console.log(`${a}`);
    });

    this.server.bind({
        port: 8090
    });
}
