require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongoDBURL = 'mongodb+srv://alexismartinez3122:fcesujri6UcZNzaT@bank.k534hfo.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome BLUD');
});



mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(3001, (req, res) => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    })
    .catch(console.error)

