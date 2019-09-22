const urlWs = 'ws://localhost:5000/ws';
export const Socket = {
    socket: {},
    connect: function (setValue) {
        this.socket = new WebSocket(urlWs);
        this.socket.onmessage = function (data){
        console.log(data.data);
            setValue(JSON.parse(data.data));
        }

    },
    send: function(data){
        this.socket.send(JSON.stringify(data));
       console.log(data);

    }
};