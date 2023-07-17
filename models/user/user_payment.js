import mongoose, {Schema} from 'mongoose';

const userPaymentSchema = new Schema({
    user_id:Schema.Types.ObjectId,
    payment_type : String,
    provider : String,
    account_no : Number,
    expiry_date : Date
})

const UserPayment = mongoose.models.UserPayment ||  mongoose.model('UserPayment', userPaymentSchema);
export default UserPayment;