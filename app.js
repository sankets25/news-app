const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// port = 3000

//serving static files in Express 
app.use(express.static('public'))
//__dirname is the root directory of the folder
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//Templating engine set to ejs
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended : true }))
//Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

//Listen on port 3000
app.listen(process.env.PORT || 5000, () => console.log(`Listening on port`))