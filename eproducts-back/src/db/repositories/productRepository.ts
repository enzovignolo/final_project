import { Model } from 'mongoose';
import { IProduct } from '../../interfaces/product.interfaces';
import baseRepository from './baseRepository';

const productRepository = () => ({
	...baseRepository,
});

export default productRepository;
