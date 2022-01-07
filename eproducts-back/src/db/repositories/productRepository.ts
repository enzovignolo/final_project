import { Model } from 'mongoose';
import { IProduct } from '../../interfaces/product.interfaces';
import baseRepository from './baseRepository';

const productRepository = (ProductModel: Model<IProduct>) => ({
	...baseRepository,
});

export default productRepository;
