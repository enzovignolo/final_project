import { Model } from 'mongoose';
import { IProduct } from '../../interfaces/product.interfaces';
import { IProductRepository } from '../../interfaces/repository.interfaces';
import ProductModel from '../Models/product.model';
import baseRepository from './baseRepository';

const productRepository = (ProductModel: Model<IProduct>) => ({
	...baseRepository,
});

export default productRepository;
