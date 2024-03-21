import mongoose from 'mongoose';

const cardSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true
        },
        cardNumber:{
            type: String,
            required: true
        },
        accountNumber:{
            type: String,
            required: true
        },
        balance:{
            type: Number,
            required: true
        },
    }
);

export const Card = mongoose.model('Card', cardSchema)