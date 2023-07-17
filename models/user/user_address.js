import mongoose, {Schema} from 'mongoose';

const userAddressSchema = new Schema({
    user_id:{
        type: Schema.Types.ObjectId,
    },
    address_line1:{
        type: String,
        required: true,
    },
    address_line2:{
        type: String,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    postal_code:{
        type: String,
        required: true,
        minlength: 6,
        maxlength: 6
    }
})

const UserAddress = mongoose.models.UserAddress ||  mongoose.model('UserAddress', userAddressSchema);
export default UserAddress;