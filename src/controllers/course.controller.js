const Course = require('../models/course.model')

const getAllCourses = (req,res) =>{
  Course.getAll()
}

module.exports={
    getAllCourses
}