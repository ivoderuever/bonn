const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { spawn } = require('child_process');
const { Server } = require('socket.io');

// config
const app = express();
const port = 8080;
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

app.use(express.json());

app.post('/api/print', (req, res) => {
  const text = req.body.text;
  const script = spawn('python', ['print.py', text]);
  let dataToSend;
  script.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });

  script.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
  });
  // res.send('ok');
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