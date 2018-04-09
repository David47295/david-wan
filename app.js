const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('static'));

const http = require('http');
const PORT = 3000;

http.createServer(app).listen(process.env.PORT || PORT, function (err) {
    if (err) console.log(err);
    else console.log("HTTP server on port %d", process.env.PORT || PORT);
});
