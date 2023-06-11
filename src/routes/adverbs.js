const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
    console.log(req.query.limit)
    try {
      const sentences = await Sentence.find()
      res.json(sentences)

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router