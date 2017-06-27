var express = require('express');  
var app = express();  
var server = require('http').Server(app);  
var io = require('socket.io')(server);

var messages = [{  
  id: 1,
  text: "Hola soy un mensaje",
  author: "Carlos Azaustre"
}];

app.use(express.static('./public'));

app.get('/', function(req, res) {  
  res.sendfile('/public/index.html');
});

app.get('/home', function(req, res) {  
  res.sendfile('./public/chatroom.html');
});

 app.post('/home', function(req, res, next) {
    var cope = req.body;
    console.log('request received:', req.body);
   var query = connection.query('insert into cope set ?', cope, function (err,     result) {
    if (err) {
        console.error(err);
        return res.send(err);
    } else {
        return res.send('Ok');
    }
    });
    //res.send('received the data.');
    });

io.on('connection', function(socket) {  
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);

  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });
});


app.get('*', function(req, res) {  
    res.sendfile('./public/index.html');                
});

app.listen(8080, function() {  
  console.log("Servidor corriendo en http://localhost:8080");
});