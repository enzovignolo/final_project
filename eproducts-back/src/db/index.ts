import mongoose from 'mongoose';
import { DB_URI } from '../config';

export const dbConnection = () => mongoose.connect(DB_URI);
