import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true
            },
        lastname:{
            type: String,
            required: true
            }
    }
);

// const userSchema = mongoose.Schema(
//     {
//         firstname:{
//             type: String,
//             required: true
//             },
//         lastname:{
//             type: String,
//             required: true
//             },
//         username:{
//             type: String,
//             required: true
//             },
//         password:{
//             type: String,
//             required: true
//             },
//         accountNumber:{
//             type: String,
//             required: true
//         },
//         cardNumber:{
//             type: String,
//             required: true
//         },
//         balance:{
//             type: Number,
//             required: true
//         },
//         transferNumber:{
//             type: String,
//             required: true
//         },
//         bank:{
//             type: String,
//             required: true
//         },
//         createdAt:{
//             type: Date,
//             default: Date.now
//         }
//     }
// );

export const User = mongoose.model('User', userSchema);