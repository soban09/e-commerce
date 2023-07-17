import mongoose, {Schema} from 'mongoose'

const cartItemSchema = new Schema({
    product_id : Schema.Types.ObjectId,
    quantity : Number,
    price : Number
})

const CartItem = mongoose.models.CartItem ||  mongoose.model('CartItem', cartItemSchema);
export default CartItem;