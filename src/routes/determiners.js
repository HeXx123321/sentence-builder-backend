const express = require('express')
const router = express.Router()
const Determiner = require('../models/determiner')

router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    try {
      const determiners = await Determiner.find()
      res.json(determiners)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router