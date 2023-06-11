const express = require('express')
const router = express.Router()
const Verb = require('../models/verbs')


router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    // TODO Add Query limits
    try {
      const verbs = await Verb.find()
      res.json(verbs)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router