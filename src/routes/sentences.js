const express = require('express')
const router = express.Router()
const sentenceModel = require('../models/sentences/sentence')
// Simplicity is better here

// Get all
router.get('/', async (req, res) => {

    let currentPage = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 20;
    
    const totalSentences = await sentenceModel.find().countDocuments();

    let totalPages = Math.ceil(totalSentences / limit);

    if (totalPages <= 0) {
      totalPages = 1;
    }

    if (currentPage <= 1) {
      currentPage = 1;
    }

    if (totalPages > 1 && currentPage > totalPages) {
      currentPage = totalPages;
    }

    let skip = (currentPage - 1) * limit;

    let prevPageIndex = null;
    let hasPrevPage = false;
    let prevPage = null;
    let nextPageIndex = null;
    let hasNextPage = false;
    let nextPage = null;

    // Update next page index
    if (currentPage < totalPages) {
      nextPageIndex = currentPage + 1;
      hasNextPage = true;
    }

    // Update prev page index
    if (currentPage > 1) {
      prevPageIndex = currentPage - 1;
      hasPrevPage = true;
    }

    // URL modifier for prev and next
    const baseUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`
    .split("?")[0];

    if (hasPrevPage) {
      prevPage = `${baseUrl}?page=${prevPageIndex}&limit=${limit}`;
    }

    if (hasNextPage) {
      nextPage = `${baseUrl}?page=${nextPageIndex}&limit=${limit}`;
    }


    try {
      const sentences = await sentenceModel.find().skip(skip)
                                     .limit(limit);
      res.status(200).json({
        success: true,
        currentPage,
        totalPages,
        limit,
        hasPrevPage,
        prevPage,
        hasNextPage,
        nextPage,
        sentences});

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

// Creating one
router.post('/', async (req, res) => {
    const sentence = new Sentence({
        sentenceBody: req.body.SentenceBody
    })

    try {
        const newSentence = await sentence.save()
        res.status(201).json(newSentence)

    } catch (err) {
        res.status(400).json({
            message: err.message
        })

    }

})

// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})


module.exports = router