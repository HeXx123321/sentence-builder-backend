const express = require('express')
const router = express.Router()
const Pronoun = require('../models/pronouns')

router.get('/', async (req, res) => {
    console.log(req.query.limit)
    try {
      const pronouns = await Pronoun.find()
      res.json(pronouns)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router