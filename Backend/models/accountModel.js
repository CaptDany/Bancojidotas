import mongoose from 'mongoose';

const accountSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true
        },
        accountNumber:{
            type: String,
            required: true
        },
        transferNumber:{
            type: String,
            required: true
        }
    }
);

export const Account = mongoose.model('Account', accountSchema)