import express, { NextFunction, Request, Response } from 'express';
import routes from './api/routes/index';
import morgan from 'morgan';
import errorsController from './api/controllers/errors.controller';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/v1', routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	errorsController(err, res);
});
export default app;
