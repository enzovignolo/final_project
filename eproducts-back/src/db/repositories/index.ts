import ProductModel from '../Models/product.model';
import productRepository from './productRepository';
import userRepository from './userRepository';

export default {
	productRepository: productRepository(),
	userRepository: userRepository(),
};
