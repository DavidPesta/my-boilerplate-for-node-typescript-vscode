import { Request, Response, NextFunction, Application } from "express";
import { Server } from "http";

import express = require('express');
import http = require('http');
import socketio = require('socket.io');

let app: Application = express();
let server: Server = http.createServer(app);
let io: SocketIO.Server = socketio(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(request: Request, response: Response, next: NextFunction) {
	response.sendFile(__dirname + '/index.html');
});

server.listen(80);
