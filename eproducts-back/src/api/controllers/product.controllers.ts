import { NextFunction, Request, Response } from 'express';
import ProductModel from '../../db/Models/product.model';
import { IProduct } from '../../interfaces/product.interfaces';

const getAll = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json('TODO');
};

const addOne = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const newProduct: IProduct = req.body;
		await ProductModel.create(newProduct);
		return res.status(200).json('ADD ONE');
	} catch (err) {}
};

const getOne = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json('GET ONE');
};

const updateOne = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json('UPDATE ONE');
};

const deleteOne = (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json('DELETE ONE');
};

export default {
	getAll,
	getOne,
	addOne,
	updateOne,
	deleteOne,
};
