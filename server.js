const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

io.on('connection', socket => {
    socket.on("name", name => {
        socket.name = name;
        console.log(socket.name + " bağlandı.");
    });

    socket.on('disconnect', () => {
        console.log(socket.name + " çıktı.");
    });
});