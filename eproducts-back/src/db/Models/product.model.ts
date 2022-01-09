import { model, Schema } from 'mongoose';
import { IProduct } from '../../interfaces/product.interfaces';

const productSchema = new Schema<IProduct>(
	{
		name: { type: String, required: [true, 'All products must have a name'] },
		price: {
			type: Number,
			required: [true, 'Indicate a price for the product'],
		},
		category: { type: String },
		stock: { type: Number, default: 0 },
		thumbnail: { type: String },
	},
	{ timestamps: true }
);

const ProductModel = model<IProduct>('Product', productSchema);

export default ProductModel;
