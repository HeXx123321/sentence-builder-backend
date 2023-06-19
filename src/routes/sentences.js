const express = require('express')
const router = express.Router()
const Sentence = require('../models/sentences/sentence')
// Simplicity is better here

// Get all
router.get('/', async (req, res) => {

    try {
      const sentences = await Sentence.find()
      res.json(sentences)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating one
router.post('/', async (req, res) => {
    const sentence = new Sentence({
        sentenceBody: req.body.SentenceBody
    })

    try {
        const newSentence = await sentence.save()
        res.status(201).json(newSentence)

    } catch (err) {
        res.status(400).json({
            message: err.message
        })

    }

})

// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})


module.exports = router