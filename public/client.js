fetch('http://localhost:3000/auth').then(() => {
  const socket = new WebSocket('ws://localhost:8080');

  socket.onopen = function() {
    console.log('conncted');
  };
});

