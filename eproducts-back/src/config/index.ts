import dotenv from 'dotenv';

const ENVIROMENT = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${ENVIROMENT}` });

/* const ENVIROMENT = process.env.ENV || 'development';

const PORT = ENVIROMENT === 'development'? process.env.PORT_dev : process.env.PORT_prod;
 */
export const PORT = process.env.PORT;
export const DB_URI = process.env.DB_URI;
export default { PORT, ENVIROMENT };
