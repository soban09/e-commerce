import mongoose, {Schema} from 'mongoose'

const orderDetailsSchema = new Schema({
    user_id : Schema.Types.ObjectId,
    payment_id : Schema.Types.ObjectId,
    product_ids : [Schema.Types.ObjectId],
    total_quantity : Number
})

const OrderDetails = mongoose.models.OrderDetails ||  mongoose.model('OrderDetails', orderDetailsSchema);
export default OrderDetails;