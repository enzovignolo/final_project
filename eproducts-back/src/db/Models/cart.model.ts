import { model, Schema } from 'mongoose';
import { ICart } from '../../interfaces/cart.interfaces';

const cartSchema = new Schema<ICart>(
	{
		products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{ timestamps: true }
);

const CartModel = model<ICart>('Cart', cartSchema);

export default CartModel;
