const Nutrition = require ("../models/nutrition.model")

const getAllNutrientsByMealId = (req, res) => {
    const id = Number(req.params.id);
    // console.log(req.params.id);

  const {userId} = req.body

  Nutrition.getByMealId(id)
  .then((nutrients) => {
    if (nutrients !== null && nutrients.length > 0) {
        res.status(200).send(nutrients)
        // console.log(nutrients);
        } else {
            res.status(404).send(`No nutrients found with meal_id: ${id}`)
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send("Error retrieving nutrients by meal_id from database");
    });
}

module.exports = {
    getAllNutrientsByMealId,
}