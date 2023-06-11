const express = require('express')
const router = express.Router()
const Exclamation = require('../models/exclamations')

router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    // TODO Query limit & pagination
    try {
      const exclamations = await Exclamation.find()
      res.json(exclamations)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router