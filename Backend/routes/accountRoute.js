import express from 'express';
import { Account } from '../models/accountModel.js';

const router = express.Router();

//get all users
router.get('/', async (req,res) => {
    try {

        const account = await Account.find();
        return res.status(200).json({
            count: account.length,
            data: account
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//get a single user
router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const account = await Account.findById(id);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//create a new user
router.post('/', async (req, res) => {
    try {
        if(
            !req.body.id ||
            !req.body.accountNumber ||
            !req.body.transferNumber
        ){
            return res.status(400).json({
                message: 'Please provide an account number and transfer number'
            });
        };
        const newAccount = {
            id: req.body.id,
            accountNumber: req.body.accountNumber,
            transferNumber: req.body.transferNumber,
        };
        const account = await Account.create(newAccount);
        return res.status(201).json(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    };
});

//update a user
router.put('/:id', async (req, res) => {
    try {
        if(
            !req.body.id ||
            !req.body.accountNumber ||
            !req.body.transferNumber
        ){
            return res.status(400).json({
                message: 'Please provide an account number and transfer number'
            });
        };
        const { id } = req.params;
        const account = await Account.findByIdAndUpdate(id, req.body);
        if (!account) {
            return res.status(404).json({message: 'Account not found'});
        }
        return res.status(200).json(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//Delete a user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findByIdAndDelete(id);
        if (!account) {
            return res.status(404).json({message: 'Account not found'});
        }
        return res.status(200).json(account);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

export default router;