import express from 'express';
import { Card } from '../models/cardModel.js';

const router = express.Router();

//get all users
router.get('/', async (req,res) => {
    try {

        const cards = await Card.find();
        return res.status(200).json({
            count: cards.length,
            data: cards
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
        const cards = await Card.findById(id);
        return res.status(200).json(cards);
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
            !req.body.cardNumber ||
            !req.body.accountNumber ||
            !req.body.balance
        ){
            return res.status(400).json({
                message: 'Please provide the card number, account number and balance'
            });
        };
        const newCard = {
            id: req.body.id,
            cardNumber: req.body.cardNumber,
            accountNumber: req.body.accountNumber,
            balance: req.body.balance
        };
        const cards = await Card.create(newCard);
        return res.status(201).json(cards);
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
            !req.body.cardNumber ||
            !req.body.accountNumber ||
            !req.body.balance
        ){
            return res.status(400).json({
                message: 'Please provide the card number, account number and balance'
            });
        };
        const { id } = req.params;
        const card = await Card.findByIdAndUpdate(id, req.body);
        if (!card) {
            return res.status(404).json({message: 'Card not found'});
        }
        return res.status(200).json(card);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//Delete a user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const card = await Card.findByIdAndDelete(id);
        if (!card) {
            return res.status(404).json({message: 'Card not found'});
        }
        return res.status(200).json(card);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

export default router;