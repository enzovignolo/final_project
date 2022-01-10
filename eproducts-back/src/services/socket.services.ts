//const wsController = require(`${__dirname}/../api/controllers/wsControllers.js`);

import { Services } from '../interfaces/services.interfaces';

//On every connection event, we create a socket TCP
const socketServices = async (io, socket, { chatServices }: Services) => {
	try {
		//We show all messages
		const messages = await chatServices.getAll();
		//Notify the frontend the we have the updated table

		io.emit('new message', messages);

		socket.on('message sent', async (messageRcv) => {
			try {
				await chatServices.newMsg(messageRcv);
				const messages = await chatServices.getAll();
				io.emit('new message', messages);
			} catch (err) {
				io.emit('user error');
				throw err;
			}
		});
		socket.on('filter messages', async (filterEmail) => {
			try {
				const messages = await chatServices.getEmailFiltered(
					filterEmail.trim()
				);

				io.emit('new filtered', messages);
			} catch (err) {
				console.log(err);
				io.emit('user error');
				throw err;
			}
		});
	} catch (err) {
		console.log(err);
		throw err;
	}
};
export default socketServices;
