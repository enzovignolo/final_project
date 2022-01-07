import { Repositories } from '../interfaces/repository.interfaces';
import { IUser } from '../interfaces/user.interfaces';
import serviceFactory from './serviceFactory';

export default ({ userRepository }: Repositories, { UserModel }) => ({
	async getAll() {
		try {
			const users = await serviceFactory.getAll(userRepository, UserModel);
			return users;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getOne(userId) {
		try {
			const user = await serviceFactory.getOne(
				userRepository,
				UserModel,
				userId
			);
			return user;
		} catch (err) {
			console.log(err);
		}
	},
	async addOne(data: IUser) {
		try {
			const newUser = serviceFactory.addOne(userRepository, UserModel, data);
			return newUser;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async updateOne(id: string, data: Partial<IUser>) {
		try {
			const updatedUser = serviceFactory.updateOneById(
				userRepository,
				UserModel,
				id,
				data
			);
			return updatedUser;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});
