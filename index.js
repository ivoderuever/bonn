const express = require('express')
const { createServer } = require('node:http');
const { Server } = require('socket.io');

// config
const app = express();
const port = 3000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

app.use(express.static('public'));

// counter
let userCount = 0;
io.on('connection', (socket) => {
  userCount++;
  io.emit('userCount', userCount);
  socket.on('disconnect', () => {
    userCount--;
    io.emit('userCount', userCount);
  });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})