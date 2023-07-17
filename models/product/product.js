import mongoose, {Schema} from 'mongoose';

const productSchema = new Schema({
    name : String,
    description : String,
    SKU : String,
    product_img:{
        data: Buffer,
        contentType: String
    },
    category_id : Schema.Types.ObjectId,
    inventory_id : Schema.Types.ObjectId,
    discount_id : Schema.Types.ObjectId,
    price : Number,
    created_at : {
        type : Date,
        default : () => Date.now(),
        immutable : true
    },
    modified_at : {
        type : Date,
        default : () => Date.now()
    },
    deleted_at : Date
})

const Product = mongoose.models.Product ||  mongoose.model('Product', productSchema);
export default Product;