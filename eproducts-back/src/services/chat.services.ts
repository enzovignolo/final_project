import { Models } from 'mongoose';
import { IError } from '../interfaces/error.interfaces';
import { Repositories } from '../interfaces/repository.interfaces';
import { IUser } from '../interfaces/user.interfaces';

export default (
	{ chatRepository, userRepository }: Repositories,
	{ ChatModel }: Models
) => ({
	async getAll() {
		try {
			const messages = await chatRepository.getAllDetailed();
			return messages;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getOne(id: string) {
		try {
			const message = await chatRepository.getOne(ChatModel, id);
			return message;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async addOne(data: Object) {
		try {
			const newMessage = await chatRepository.addOne(ChatModel, data);
			return newMessage;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async updateOne(id: string, data: Object) {
		try {
			const updated = await chatRepository.updateOne(ChatModel, id, data);
			return updated;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async deleteOne(id: string) {
		try {
			await chatRepository.deleteOne(ChatModel, id);
			return;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async newMsg(msg: { userEmail: string; message: string }) {
		try {
			const user = await userRepository.getByEmail(msg.userEmail);
			if (!user) {
				const err: IError = new Error('No user with that email');
				err.status = 404;
				throw err;
			}
			return await chatRepository.addOne(ChatModel, {
				author: user,
				message: msg.message,
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getEmailFiltered(email: string) {
		try {
			const filterEmail = email;
			const user = await userRepository.getByEmail(filterEmail);

			if (!user) {
				const err: IError = new Error('There is no user with that email');
				err.status = 404;
				throw err;
			}

			const messages = await chatRepository.getFiltered({ author: user._id });
			return messages;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});
