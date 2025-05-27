const http = require('http');
const app = require('./app');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });
app.set('io', io);

io.on('connection', socket => {
  console.log('Cliente WS conectado:', socket.id);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server escuchando en http://localhost:${PORT}`));
