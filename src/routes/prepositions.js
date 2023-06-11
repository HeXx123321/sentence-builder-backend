const express = require('express')
const router = express.Router()
const Preposition = require('../models/prepositions')


router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    // TODO Add Query limiting
    try {
      const prepositions = await Preposition.find()
      res.json(prepositions)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router