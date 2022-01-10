import { Schema, model } from 'mongoose';
import { IChat } from '../../interfaces/chat.interfaces';
const chatSchema = new Schema<IChat>({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	message: {
		type: String,
		required: [true, 'Message must have a message text'],
	},
	date: {
		type: Schema.Types.Date,
		default: new Date(Date.now()),
	},
});

const ChatModel = model('Message', chatSchema);

export default ChatModel;
