fetch('https://localhost:3001/auth').then(() => {
  const socket = new WebSocket('wss://localhost:8080');

  socket.onopen = function() {
    console.log('conncted');
  };
});

