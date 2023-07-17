import mongoose, {Schema} from 'mongoose'

const discountSchema = new Schema({
    name : String,
    description : String,
    discount_type : String,
    discount_percent : Number,
    active : Boolean,
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

const Discount = mongoose.models.Discount ||  mongoose.model('Discount', discountSchema);
export default Discount;