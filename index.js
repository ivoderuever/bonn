const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { spawn } = require('child_process');
const { Server } = require('socket.io');

// config
const app = express();
const port = 80;
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

const printQueue = []; // Array to store the print queue

app.post('/api/print', (req, res) => {
  const text = req.body.text;
  printQueue.push(text);
  if (printQueue.length > 0) {
    printQueueIntervalFunc();
  }
  res.send('Added to print queue');
});

// on change printQueue
let isPrinting = false;
const printQueueIntervalFunc = () => {
  if (printQueue.length > 0 && !isPrinting) {
    isPrinting = true;
    const text = printQueue.shift();
    const python = spawn('python', ['print.py', text]);
    python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      if(printQueue.length > 0) {
        isPrinting = false;
        printQueueIntervalFunc();
      }
      isPrinting = false;
    });
  } else {
    setTimeout(() => {
      printQueueIntervalFunc();
    }, 1000);
  }
};



// const script = spawn('python3', ['print.py', text]);
// let dataToSend;

// script.stdout.on('data', function (data) {
//   console.log('Pipe data from python script ...');
//   dataToSend = data.toString();
// });

// script.on('close', (code) => {
//   console.log(`child process close all stdio with code ${code}`);
//   // Remove the oldest text from the print queue
//   if (printQueue.length > 0) {
//     printQueue.shift();
//   }
//   // Add the new text to the print queue
//   printQueue.push(text);
//   // Send data to browser
//   res.send(dataToSend);
// });

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