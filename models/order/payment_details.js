import mongoose, {Schema} from 'mongoose'

const paymentDetailsSchema = new Schema({
    order_id : Schema.Types.ObjectId,
    payment_type : String,
    provider : String,
    amount : Number,
    status : String,
})

const PaymentDetails = mongoose.models.PaymentDetails ||  mongoose.model('PaymentDetails', paymentDetailsSchema);
export default PaymentDetails;