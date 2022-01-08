import { Response } from 'express';
import { IError } from '../../interfaces/error.interfaces';

export default (err: IError, res: Response) => {
	if (err.name === 'JsonWebTokenError') {
		err.status = 401;
	}
	if (err.code == 11000) {
		err.message = `Duplicated ${Object.keys(err.keyPattern)}`;
		err.status = 400;
	}
	return res.status(err.status || 500).json({ err: err.message });
};
