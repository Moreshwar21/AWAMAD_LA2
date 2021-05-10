const express = require('express')
const app = express()
const port = 4000
//Simple Root Path
app.get('/', function (req, res) {
    res.send('Moreshwar Manohar Sonawale TY B.Tech CSE Student')
    console.log('Trying')

  })                                

//Simple Path For /index2/
app.get('/index2/', function (req, res) {
  res.send('Serve Video File')
  })                                

//Use multiple callback function
  app.get('/index2/a', function (req, res) {
    res.send('Hello from A!')
  })

  app.get('/index2/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from B!')
  })
  var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  var cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/index2/c', [cb0, cb1, cb2])

//Parameters in route
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.listen(port, () => {
  console.log('app listening at http://localhost:${port}')
})

                             
