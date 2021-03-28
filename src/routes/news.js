const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get(`https://v1.nocodeapi.com/sankets25/ep/cPdmGAUUckKPxJOW`)
        res.render('news', { articles : newsAPI.data.articles })
        // console.log(newsAPI.data.articles)
        
    } catch (error) {
        if(error.response){
            res.render('news', { articles : null })
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        }else if(error.requiest){
            res.render('news', { articles : null })
            console.log(error.requiest)
        } else {
            res.render('news', { articles : null })
            console.error('Error', error.message    )
        }
        
    }
    
})


newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://v1.nocodeapi.com/sankets25/ep/cPdmGAUUckKPxJOW&q=${search}`)
        // console.log(newsAPI)

        res.render('newsSearch', { articles : newsAPI.data.articles })
        // console.log(newsAPI.data.articles)
        
    } catch (error) {
        if(error.response){
            res.render('newsSearch', { articles : null })
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        }else if(error.requiest){
            res.render('newsSearch', { articles : null })
            console.log(error.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', error.message    )
        }
        
    }
    
})

module.exports = newsRouter