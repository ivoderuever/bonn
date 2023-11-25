const socket = io();

socket.on('userCount', (userCount) => {
  document.getElementById('userCount').innerText = userCount;
});

console.log('loaded');