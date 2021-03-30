const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
require('dotenv').config()

newsRouter.get('', async(req, res) => {
    try {
        const api_key = process.env.API_KEY
        // console.log(api_key)
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
        res.render('news', { articles : newsAPI.data.articles })
        // console.log(process.env)
        
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
        const api_key = process.env.API_KEY
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}&q=${search}`)
        // console.log(newsAPI.data.articles)

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