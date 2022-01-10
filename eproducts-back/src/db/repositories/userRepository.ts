import { IModels } from '../../interfaces/models.interfaces';
import baseRepository from './baseRepository';

const userRepository = ({ UserModel }: IModels) => ({
	...baseRepository,
	async getByEmail(email: string) {
		try {
			console.log(typeof email);
			const user = await UserModel.findOne({ email: email });
			return user;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

export default userRepository;
