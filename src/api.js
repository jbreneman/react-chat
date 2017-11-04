import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8900');

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
