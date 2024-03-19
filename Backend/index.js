import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import { User } from './models/userModel.js'


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome BLUD');
});

app.get('/users', (req,res => {
    try {
        if()
    } catch (error) {
        console.log(error.message);

    }
}))
// Route for a new user
app.post('/user', async (req, res) => {
    try {
        if(
            !req.body.firstName ||
            !req.body.lastName 
        ){
            return res.status(400).json({
                message: 'Please provide a first and last name'
            });
        };
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        const user = await User.create(newUser);
        return res.status(201).json(user);
    } catch (error) {
        
    };
});


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(PORT, (req, res) => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch(console.error)

