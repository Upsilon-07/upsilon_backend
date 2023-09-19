const Meal = require('../models/meal.model')

const FavouritesMeal = require('../models/favouriteMeals.model')


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

// const getMealbyId = (req,res) => {
//     const id = Number(req.params.id);
//     Meal.getMealById(id)
//     .then((meal) => {
//         if(meal !== null && meal.length > 0){
//             res.status(200).send(meal)
//         } else {
//             res.status(404).send(`No meal found with id: ${id}`)
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//         res.status(500).send("Error retrieving meal by id from database");
//     });
// }

const getMealbyId = (req,res) => {
    const id = Number(req.params.id);

    const {userId} = req.body


    Meal.getMeal(id)
    .then((meal) => {
        if(meal !== null && meal.length > 0){
            FavouritesMeal.getMealIfIsFavouriteByUser(id,userId)
            .then((response)=>{
                if (response !== null && response.length > 0) {
                    const isFavouriteMeal = true
                    res.status(200).send({ meal,isFavouriteMeal });
                  } else {
                    const isFavouriteMeal = false
                    res.status(200).send({ meal,isFavouriteMeal });
                }
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("Error retrieving favourite meal.");
            });
        }else {
            res.status(404).send(`No meals found with id: ${id}`);
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("Error retrieving meals by id from db.");
        });
    };
// const getMealByMealType = (req, res) => {
//     console.log("This is the get meal by meal type");
// }

module.exports = {
    getAllMeals,
    getMealbyId,
    // getMealByMealType,
}