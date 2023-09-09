const Meal = require('../models/meal.model')


const getAllMeals = (req, res) => {
    Meal.getall()
}

module.exports = {
    getAllMeals,
}