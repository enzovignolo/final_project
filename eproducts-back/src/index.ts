import app from './app';
import conf from './config/index';
import { dbConnection } from './db';

(async () => {
	try {
		await dbConnection();
		console.log('[OK]Database connected');
	} catch (err) {
		console.log(err);
		throw err;
	}
})();
app.listen(conf.PORT, () => {
	console.log(`[OK]Server started on port ${conf.PORT}`);
});
