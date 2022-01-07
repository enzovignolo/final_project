import { NextFunction, Request, Response } from 'express';
import ProductModel from '../../db/Models/product.model';
import repositories from '../../db/repositories';
import { IProduct } from '../../interfaces/product.interfaces';
import { Repositories } from '../../interfaces/repository.interfaces';
import services from '../../services';

const getAll = async (
	req: Request,
	res: Response,
	next: NextFunction,
	service
) => {
	try {
		const data = await service.getAll();
		return res.status(200).json(data);
	} catch (err) {
		next(err);
	}
};

const addOne = async (
	req: Request,
	res: Response,
	next: NextFunction,
	service
) => {
	try {
		const data: IProduct = req.body;
		const newEntry = await service.addOne(data);
		return res.status(200).json(newEntry);
	} catch (err) {
		next(err);
	}
};

const getOne = async (
	req: Request,
	res: Response,
	next: NextFunction,
	service
) => {
	try {
		const data = await service.getOne(req.params.id);
		return res.status(200).json(data);
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const updateOne = async (
	req: Request,
	res: Response,
	next: NextFunction,
	service
) => {
	try {
		const updated = await service.updateOneById(req.params.id, req.body);
		return res.status(200).json(updated);
	} catch (err) {
		next(err);
	}
};

const deleteOne = async (
	req: Request,
	res: Response,
	next: NextFunction,
	service
) => {
	try {
		await service.deleteOne(req.params.id);
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
