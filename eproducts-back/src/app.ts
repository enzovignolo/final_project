import express, { NextFunction, Request, Response } from 'express';
import routes from './api/routes/index';
import cors from 'cors';
import morgan from 'morgan';
import errorsController from './api/controllers/errors.controller';
import session from 'express-session';

import { SESSION_MAXAGE, SESSION_SECRET } from './config';
import chatRoutes from './api/routes/chat.routes';
import controllers from './api/controllers';
const app = express();
declare module 'express-session' {
	interface Session {
		token?: string;
		user?: { email: string; cartId: string };
	}
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: SESSION_MAXAGE },
	})
);
app.use(express.static('public'));
app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use('/api/v1', routes);
app.use('/', chatRoutes(controllers));
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	errorsController(err, res);
});
export default app;
