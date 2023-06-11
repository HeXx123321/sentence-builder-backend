const express = require('express')
const router = express.Router()
const Adjective = require('../models/adjective')

router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    // TODO: Pagination and Limiting
    try {
      const adjectives = await Adjective.find()
      res.json(adjectives)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router