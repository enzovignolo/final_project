import { model, Schema } from 'mongoose';
import { IUser } from '../../interfaces/user.interfaces';

const userSchema = new Schema<IUser>({
	firstname: { type: String, required: [true, 'User must have a firstname'] },
	lastname: { tpye: String },
	address: { type: String, required: [true, 'User must have an address'] },
	photo: { type: String },
	phoneNumber: { type: String },
	email: {
		type: String,
		required: [true, 'User must have an email associated'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'User must have a password'],
		minlength: [8, 'Password must be at least 8 characters long'],
	},
	passwordConfirmation: {
		type: String,
		validate: {
			validator: function () {
				return this.password === this.passwordConfirmation;
			},
		},
	},
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
