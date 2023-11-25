const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
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

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(join(__dirname, 'public/form.html'));
});


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