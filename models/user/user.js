import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    password:{
        type:String,
        required: true,
        minlength: 8,
        maxlength: 20
    },
    first_name:{
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,        
    },
    phone_no:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    }
})

const User = mongoose.models.User ||  mongoose.model('User', userSchema);
export default User;