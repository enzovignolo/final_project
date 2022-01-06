import ProductModel from '../Models/product.model';
import productRepository from './productRepository';

export default {
	productRepository: productRepository(ProductModel),
};
