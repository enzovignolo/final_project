import { IModels } from '../../interfaces/models.interfaces';
import baseRepository from './baseRepository';

const userRepository = ({ UserModel }: IModels) => ({
	...baseRepository,
	async getByEmail(email: string) {
		try {
			const user = await UserModel.findOne({ email });
			return user;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
});

export default userRepository;
