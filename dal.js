// this is where all of the db interactions occur
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Robot = require('./model')

mongoose.connect('mongodb://localhost:27017/candyRobots', {
  useMongoClient: true
})

// get all robots
function getAllRobots () {
  return Robot.find()
}
// getAllRobots().then(robots => robots)
// get a single robot
function getRobot (robotId) {
  return Robot.findById(robotId)
}
// add a robot
function addRobot (newRobot) {
  const robot = new Robot(newRobot)
  return robot.save()
}
// edit a robot
// delete a robot
function deleteRobot (robotId) {
  return Robot.findOneAndRemove(robotId)
}

module.exports = { getAllRobots, addRobot, getRobot, deleteRobot }
