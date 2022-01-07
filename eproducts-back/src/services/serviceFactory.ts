import { IRepository } from '../interfaces/repository.interfaces';

//All basic services

const getAll = async (repository: IRepository, DataModel) => {
	try {
		console.log('++++', DataModel);
		return await repository.getAll(DataModel);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const getOne = async (repository: IRepository, DataModel, id) => {
	try {
		return await repository.getOne(DataModel, id);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const updateOneById = async (
	repository: IRepository,
	DataModel,
	id,
	data: Object
) => {
	try {
		return await repository.updateOne(DataModel, id, data);
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const deleteOne = async (repository: IRepository, DataModel, id: string) => {
	try {
		await repository.deleteOne(DataModel, id);
		return;
	} catch (err) {
		console.log(err);
		throw err;
	}
};
const addOne = async (repository: IRepository, DataModel, data: Object) => {
	try {
		const newProduct = await repository.addOne(DataModel, data);
		return newProduct;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

export default {
	getAll,
	getOne,
	addOne,
	updateOneById,
	deleteOne,
};
