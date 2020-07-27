// EXPRESS
const express = require('express');

// MOTOR DE PLANTILLA EJS
const engine = require('ejs-mate');

// ESTO LO QUE PERMITE ES QUE NO IMPORTA EL ENTORNO EN EL QUE SE ESTE DESARROLLANDO NO HABRÁ PROBLEMAS CON / \ EN LOS DIRECTORIOS
const path = require('path');

// VAMOS A REQUERIR SOCKETIO
const socketIO = require('socket.io');

// PARA UTILIZAR SOCKET TENEMOS QUE CREAR UN SERVIDOR 
const http = require('http');


// INITIALIZATION
const app = express();

const server = http.createServer(app);

const io = socketIO(server);

// SETTING

// app.engine() ES PARA DEFINIR EL MOTOR DE PLANTILLA QUE QUEREMOS UTILIZAR
app.engine('ejs', engine);

// AQUI SE UTILIZA EL MOTOR DE PLANTILLA
app.set('view engine', 'ejs');

// _dirname ES UNA CONSTANTE DE NODE QUE TIENE LA RUTA DEL PROYECTO
app.set('views', path.join(__dirname, 'views'));

// ROUTES

// PARA USAR LA RUTA SE LO PASAMOS A UN MÉTODO DE EXPRESS LLAMADO app.use();
app.use(require('./routes/'));

// REQUERIMOS Y LE PASAMOS IO A SOCKET
require('./sockets')(io);

// STATIC FILES, AQUI SE LE INDICA A EXPRESS DONDE ESTAN LOS ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')));

// STARTING THE SERVER
server.listen(4000, () => {
    console.log('Server on port 4000');
});