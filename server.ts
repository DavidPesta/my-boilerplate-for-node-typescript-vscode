import { Request, Response, NextFunction, Application } from "express";
import { Server } from "http";

import express = require('express');
import http = require('http');
import socketio = require('socket.io');

let glob = require("glob");
let path = require("path");
glob.sync("./classes/**/*.ts").forEach((file: any) => {
	let slashIndex: number = file.lastIndexOf("/");
	let dotIndex: number = file.lastIndexOf(".");
	let className: string = file.substr(slashIndex + 1, dotIndex - slashIndex - 1);
	global[className] = require(path.resolve(file))[className];
});

let app: Application = express();
let server: Server = http.createServer(app);
let io: SocketIO.Server = socketio(server);

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(request: Request, response: Response, next: NextFunction) {
	response.sendFile(__dirname + '/index.html');
});

server.listen(80);

io.on('connection', (client) => {
	// TODO: Client is now connected.
	//       This is where you keep track of the client's socket and connection so that you can
	//       keep track of what user belongs to what socket so that you can know who you are receiving
	//       from and you know what socket you need to send to for the user you are working with.
	
	client.on('call', function(request) {
		let method: string = request.method;
		let dotIndex: number = method.indexOf(".");
		let className: string = method.substr(0, dotIndex);
		let methodName: string = method.substr(dotIndex + 1);
		let data: any = request.data;
		global[className][methodName](data);
	});
});
