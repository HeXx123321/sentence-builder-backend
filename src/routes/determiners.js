const express = require('express')
const router = express.Router()
const determinerModel = require('../models/determiners/determiners')

router.get('/', async (req, res) => {
    // console.log(req.query.limit)
    let currentPage = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    
    const totalNouns = await determinerModel.find().countDocuments();

    let totalPages = Math.ceil(totalNouns / limit);

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
      const nouns = await determinerModel.find().skip(skip)
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
        nouns});

    } catch (err) {
      res.status(500).json({ message: err.message })
    }

})

module.exports = router