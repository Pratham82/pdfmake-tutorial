const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
const pdfRouter = require('./routes/pdfmake')

//  Connecting middlewares
app.use(bodyParser.urlencoded({ extended: true }))

// Setting path for public folder
app.use(express.static(path.join(__dirname, 'public')))

//@GET route
app.get('/', (_, res) => res.send('index.html'))

//@POST route for sending pdf
//app.post('/pdfMake', pdfRouter)
app.use('/pdfmake', pdfRouter)

// Starting server
app.listen(process.env.PORT || 3000, () =>
  console.log(`Server is running on ${process.env.PORT || 3000}`)
)
