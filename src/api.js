import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8900');

export const connect = (user) => {
	socket.emit('userConnect', user);
};

export const chatMessage = (message) => {
	socket.emit('chatMessage', message);
};

export const updateUserlist = (callback) => {
	socket.on('updateUserlist', users => callback(users));
};
