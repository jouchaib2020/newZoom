const  express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const  http =  require('http');
const server =  http.createServer(app);
const PORT = 3001;

const {ExpressPeerServer, PeerServer} = require('peer');
const peerServer = ExpressPeerServer( server,{debug: true});
app.use('/peerJs', peerServer);
const io = require('socket.io')(server);

io.on('connection', socket => {
  const users = [];
  for (let [id] of io.of('/').sockets){
    users.push(id);
  }
  socket.emit('users', users); 
  socket.on('join-room', (ROOM_ID, userId) => {
      console.log(`user ${userId} joind room ${ROOM_ID}`);
      socket.join(ROOM_ID);
      socket.to(ROOM_ID).broadcast.emit('user-connected', userId);
      socket.on('disconnect', () => { console.log(`user ${userId} disconnected!`) });
    });
  socket.on('message', message=>{ console.log(`we recieved a message: ${message}`)})
});


app.get('/',(req, res)=>{
    res.status(200).redirect(`http://localhost:3000/`)
});




server.listen(3001, ()=>{
    console.log(`listenning on port:${PORT}`);
});
