import { Repositories } from '../interfaces/repository.interfaces';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interfaces';
import { JWT_SECRET } from '../config';

export default ({ userRepository }: Repositories) => ({
	async login(email: string, password: string) {
		try {
			const user: IUser = await userRepository.getByEmail(email);
			if (!user) {
				const err = new Error('There is no user with that email');
				throw err;
			}

			if (await bcrypt.compare(password, user.password)) {
				const token = await jwt.sign(
					{ email: user.email, cart: user.cart },
					JWT_SECRET
				);
				return token;
			} else {
				return false;
			}
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async isLogged(token: string) {
		try {
			const isLogged = await jwt.verify(token, JWT_SECRET);
			return isLogged;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});
