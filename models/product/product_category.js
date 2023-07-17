import mongoose, {Schema} from 'mongoose';

const productCategorySchema = new Schema({
    name : String,
    metadata : [String],
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

const ProductCategory = mongoose.models.ProductCategory ||  mongoose.model('ProductCategory', productCategorySchema);
export default ProductCategory;
