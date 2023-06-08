const express = require('express')
const router = express.Router()

// Get 1
router.get('/sentences/:id', (req, res) => {
    res.send(req.params.id);

})
// Get all

router.get('/sentences/', (req, res) => {
    res.send('Get all');
})
// Create 1

router.post('/sentences/', (req, res) => {
    res.send('Create 1');

})
// Update 1
router.patch('/sentences/:id', (req, res) => {
    res.send(req.params.id);
})

// Delete

router.delete('/sentences/:id', (req, res) => {
    res.send(req.params.id);
})

module.exports = router