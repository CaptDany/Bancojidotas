import { Schema } from 'mongoose';

var userSchema = new Schema({
        name: String,
        email: String,
        password: String
    });
    export default userSchema;