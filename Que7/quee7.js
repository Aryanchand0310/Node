const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/5.html");
});
let visitorCount = 0;

io.on('connection', (socket) => {
  // Increment the visitor count and broadcast to all clients
  visitorCount++;
//   if (visitorCount % 2 !== 0) {
//     io.emit('odd-visitor-count', visitorCount);
//   }

  console.log(`New client connected. Visitor count: ${visitorCount}`);

  // Display student details in the server console
  const studentDetails = {
    name: 'Name',
    age: 20,
    major: 'Computer Science'
  };
   if(visitorCount%2!=0){
    console.log('Student details:', studentDetails);
    setTimeout(()=>{
        socket.send(JSON.stringify(studentDetails))
      },1000)
   }
   
  // Disconnect event
  socket.on('disconnect', () => {
    visitorCount--;
    console.log(`Client disconnected. Visitor count: ${visitorCount}`);
  });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
