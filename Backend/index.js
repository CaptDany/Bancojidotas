import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import userRoute from './routes/userRoute.js';
import cardRoute from './routes/cardRoute.js';



const app = express();
//Middleware for parsing request body
app.use(express.json());
//Middleware for handling CORS policy
app.use(cors());

app.get('/', (req, res) => {
    return res.status(234).send('Welcome BLUD');
});


app.use('/user', userRoute);
app.use('/card', cardRoute);
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(PORT, (req, res) => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch(console.error)

