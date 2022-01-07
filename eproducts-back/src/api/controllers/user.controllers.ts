import { NextFunction, Request, Response } from 'express';
import services from '../../services';

import controllerFactory from './controllerFactory';

const { userServices } = services;

const getAll = (req: Request, res: Response, next: NextFunction) => {
	controllerFactory.getAll(req, res, next, userServices);
};
const getOne = (req: Request, res: Response, next: NextFunction) => {
	controllerFactory.getOne(req, res, next, userServices);
};
const addOne = (req: Request, res: Response, next: NextFunction) => {
	controllerFactory.addOne(req, res, next, userServices);
};

const updateOne = (req: Request, res: Response, next: NextFunction) => {
	controllerFactory.updateOne(req, res, next, userServices);
};
const deleteOne = (req: Request, res: Response, next: NextFunction) => {
	controllerFactory.deleteOne(req, res, next, userServices);
};
