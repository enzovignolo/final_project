import app from './app';
import conf from './config/index';
import { dbConnection } from './db';
import { Server } from 'socket.io';
import socketServices from './services/socket.services';
import services from './services';

(async () => {
	try {
		await dbConnection();
		console.log('[OK]Database connected');
	} catch (err) {
		console.log(err);
		throw err;
	}
})();
const server = app.listen(conf.PORT, () => {
	console.log(`[OK]Server started on port ${conf.PORT}`);
});

const io = new Server(server);
io.on('connect', (socket) => {
	socketServices(io, socket, services);
});
