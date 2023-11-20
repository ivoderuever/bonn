const socket = io();

socket.on('userCount', (userCount) => {
  document.getElementById('userCount').innerHTML = "Active users: " + userCount;
});

console.log('loaded');