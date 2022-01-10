import { Document } from 'mongoose';
import { IUser } from './user.interfaces';

export interface IChat extends Document {
	author: IUser;
	message: string;
	date: Date;
}
