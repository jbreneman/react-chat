import openSocket from 'socket.io-client';

const socket = openSocket(process.env.REACT_APP_SERVER_HOST, {'transports': ['websocket', 'polling']});

export const connect = (user) => {
	socket.emit('userConnect', user);
};

export const sendMessage = (message) => {
	socket.emit('chatMessage', message);
};

export const receiveMessage = (callback) => {
	socket.on('chatMessage', message => callback(message));
};

export const allMessages = (callback) => {
	socket.on('allMessages', messages => callback(messages));
};

export const updateUserlist = (callback) => {
	socket.on('updateUserlist', users => callback(users));
};

export const verifyName = (user) => {
	socket.emit('verifyName', user);
};

export const receiveVerifyName = (callback) => {
	socket.on('verifyName', user => callback(user));
};

export const userConnect = (user) => {
	socket.emit('userConnect', user);
};

export const setName = (user) => {
	socket.emit('setName', user);
};

export const reconnect = (callback) => {
	socket.on('reconnect', user => callback(user));
};

