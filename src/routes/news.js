const express = require('express')
const newsRouter = express.Router()
const express = require('express')

newsRouter.get('', async(req, res) => {
    res.render('news')
})

module.exports = newsRouter