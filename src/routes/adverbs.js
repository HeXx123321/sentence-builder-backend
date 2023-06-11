const express = require('express')
const router = express.Router()
const Adverb = require('../models/adverb')


router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    // TODO add query limits

    try {
      const adverbs = await Adverb.find()
      res.json(adverbs)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router