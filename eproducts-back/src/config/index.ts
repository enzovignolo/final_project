import dotenv from 'dotenv';

const ENVIROMENT = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${ENVIROMENT}` });

export const PORT = process.env.PORT;
export const DB_URI = process.env.DB_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export default { PORT, ENVIROMENT, JWT_SECRET };
