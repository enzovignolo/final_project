import { NextFunction, Request, Response } from 'express';
import ProductModel from '../../db/Models/product.model';
import repositories from '../../db/repositories';
import { IProduct } from '../../interfaces/product.interfaces';
import { Repositories } from '../../interfaces/repository.interfaces';
import services from '../../services';

const {productServices} = services;


const getAll = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await productServices.getAll();
		return res.status(200).json(products);
	} catch (err) {
		next(err);
	}
};

const addOne = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data: IProduct = req.body;
		const newProduct = await productServices.addOne(
			
			data
		);
		return res.status(200).json(newProduct);
	} catch (err) {
		next(err);
	}
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const product = await productServices.getOne(
			
			req.params.id
		);
		return res.status(200).json(product);
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const updateOne = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const updated = await productServices.updateOneById(
		
			req.params.id,
			req.body
		);
		return res.status(200).json(updated);
	} catch (err) {
		next(err);
	}
};

const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await productServices.deleteOne(
			
			req.params.id
		);
		return res.status(203).json();
	} catch (err) {
		next(err);
	}
};

export default {
	getAll,
	getOne,
	addOne,
	updateOne,
	deleteOne,
};
