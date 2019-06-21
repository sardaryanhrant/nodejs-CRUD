let CustomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

////////////////////////////
///////// CRUD /////////////
///////////////////////////


// Create
router.post('/customer', (req, res)=>{
    if(!req.body){
        return res.status(400).send(`Request body is missing`)
    }
    let model = new CustomerModel(req.body)
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0){
                res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
})

// Read
router.get('/customer', (req, res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing url parameter email')
    }
    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(doc)
    })
})


// Update
router.put('/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing url parameter email')
    }
    
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(doc)
    })
})


// Delete
router.delete('/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(400).send('Missing url parameter email')
    }    
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err =>{
        res.status(500).json(doc)
    })
})
module.exports = router