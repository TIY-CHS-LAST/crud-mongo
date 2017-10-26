const express = require('express')
const bodyParser = require('body-parser')
const robotDal = require('./dal')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// get all robots
app.get('/robots', function (req, res) {
  robotDal.getAllRobots().then(function (robots) {
    res.json(robots)
  })
})

// add a robot
app.post('/robots', function (req, res) {
  robotDal.addRobot(req.body).then(function (res) {
    res.status(200).json({ msg: 'ok usa!', res })
  })
})

// get a single robot
app.get('/robots/:id', function (req, res) {
  robotDal.getRobot(req.params.id).then(function (result) {
    res.status(200).json(result[0])
  })
})

// update a robot
app.put('/robots/:id', function (req, res) {
})

// delete a robot
app.delete('/robots/:id', function (req, res) {
  robotDal.deleteRobot(req.params.id).then(function (response) {
    res.status(200).json(response)
  })
})

app.listen(3000, function () {
  console.log(`Server started on port 3000`)
})
