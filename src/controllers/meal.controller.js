const Meal = require('../models/meal.model')


const getAllMeals = (req, res) => {
    Meal.getall()
    .then((meals) => {
        if (meals !== null && meals.length > 0) {
            res.status(200).send(meals);
        } else {
            res.status(404).send("Meals not found");
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving meals from database");
    });
};

const getMealbyId = (req,res) => {
    const id = Number(req.params.id);
    Meal.getMealById(id)
    .then((meal) => {
        if(meal !== null && meal.length > 0){
            res.status(200).send(meal)
        } else {
            res.status(404).send(`No meal found with id: ${id}`)
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving meal by id from database");
    });
}

// const getMealByMealType = (req, res) => {
//     console.log("This is the get meal by meal type");
// }

module.exports = {
    getAllMeals,
    getMealbyId,
    // getMealByMealType,
}