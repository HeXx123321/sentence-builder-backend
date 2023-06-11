const express = require('express')
const router = express.Router()
const Noun = require('../models/nouns')

router.get('/', async (req, res) => {
    console.log(req.query.limit)
    try {
      const nouns = await Noun.find()
      res.json(nouns)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router