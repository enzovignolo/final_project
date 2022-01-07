import cartRepository from './cartRepository';
import productRepository from './productRepository';
import userRepository from './userRepository';

export default {
	productRepository: productRepository(),
	userRepository: userRepository(),
	cartRepository:cartRepository()
};
