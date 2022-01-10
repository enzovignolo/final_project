import { Models } from 'mongoose';
import baseRepository from './baseRepository';

export default ({ ChatModel }: Models) => ({
	...baseRepository,
	async getAllDetailed() {
		try {
			const chats = await ChatModel.find({}).populate({
				path: 'author',
				select: 'email',
			});
			return chats;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getFiltered(filter) {
		try {
			const messages = await ChatModel.find(filter).populate({
				path: 'author',
				select: 'email',
			});
			return messages;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});
