import { Model } from 'mongoose';
import { IError } from '../../interfaces/error.interfaces';

export default {
	async getAll(Model: Model<any>) {
		try {
			const data = await Model.find({});
			return data;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async addOne(Model: Model<any>, data: Object) {
		try {
			const newEntry = await Model.create(data);
			return newEntry;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async getOne(Model: Model<any>, id: string) {
		try {
			const data = await Model.findById(id);
			if (!data) {
				const err: IError = new Error(
					`${Model.name} with that id was not found`
				);
				err.status = 404;
				throw err;
			}
			return data;
		} catch (err) {
			throw err;
		}
	},
	async updateOne(Model: Model<any>, id: string, data: Object) {
		try {
			const updatedData = await Model.findByIdAndUpdate(
				id,
				{
					$set: data,
				},
				{ new: true }
			);
			if (!updatedData._id) {
				const err: IError = new Error(`There is no ${Model.name} with that id`);
				err.status = 404;
				throw err;
			}
			return updatedData;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	async deleteOne(Model: Model<any>, id: string) {
		try {
			await Model.findByIdAndDelete(id);
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
};
