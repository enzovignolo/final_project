import Models from '../Models';
import cartRepository from './cartRepository';
import productRepository from './productRepository';
import purchaseRepository from './purchaseRepository';
import userRepository from './userRepository';

export default {
	productRepository: productRepository(Models),
	userRepository: userRepository(Models),
	cartRepository: cartRepository(Models),
	purchaseRepository: purchaseRepository(),
};
