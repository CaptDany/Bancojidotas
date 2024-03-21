import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

//get all users
router.get('/users', async (req,res) => {
    try {

        const users = await User.find();
        return res.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//get a single user
router.get('/users/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//create a new user
router.post('/user', async (req, res) => {
    try {
        if(
            !req.body.id ||
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
        console.log(error.message);
        res.status(500).json({message: error.message});
    };
});

//update a user
router.put('/user/:id', async (req, res) => {
    try {
        if(
            !req.body.id ||
            !req.body.firstName ||
            !req.body.lastName 
        ){
            return res.status(400).json({
                message: 'Please provide a first and last name'
            });
        };
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//Delete a user
router.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

export default router;