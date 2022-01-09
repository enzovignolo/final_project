import { model, Schema } from 'mongoose';
import { IPurchase } from '../../interfaces/purchase.interfaces';

const purchaseSchema = new Schema<IPurchase>(
	{
		products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
		buyer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{ timestamps: true }
);

const PurchaseModel = model<IPurchase>('Purchase', purchaseSchema);

export default PurchaseModel;
