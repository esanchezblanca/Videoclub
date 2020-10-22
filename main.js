const express = require('express');
const server = express();
server.get ('/user/login', (req, res)=> {
    res.send('<p>Introduce tu usuario</p>');
});


//despliego el servidor
server.listen(5000, () => {
console.log('inicioServer');
});