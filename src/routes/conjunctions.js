const express = require('express')
const router = express.Router()
const Conjunction = require('../models/conjunctions')


router.get('/', async (req, res) => {
    console.log(req.query.limit)
    try {
      const conjunctions = await Conjunction.find()
      res.json(conjunctions)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router