import { model, Schema, Document } from 'mongoose';
import { ICart } from '../../interfaces/cart.interfaces';
import { IUser } from '../../interfaces/user.interfaces';
import bcrypt from 'bcrypt';
import CartModel from './cart.model';

const userSchema = new Schema<IUser>(
	{
		firstname: { type: String, required: [true, 'User must have a firstname'] },
		lastname: { tpye: String },
		address: { type: String, required: [true, 'User must have an address'] },
		photo: { type: String },
		phoneNumber: { type: String },
		cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
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
	},
	{ timestamps: true }
);

interface IUserDoc extends Document {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	passwordConfirmation: string;
	phoneNumber: string;
	photo: string;
	cart: ICart;
	address: string;
}

//Pre-middleware to encrypt password & create cart associated to the user
userSchema.pre<IUserDoc>('save', async function (next) {
	try {
		if (this.isModified('password')) {
			this.password = await bcrypt.hash(this.password, 10);
			this.passwordConfirmation = '';
		}

		if (this.isNew) {
			const newCart = await CartModel.create({ user: this._id });
			this.cart = newCart;
		}
		next();
	} catch (err) {
		console.log(err);
		next(err);
	}
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
