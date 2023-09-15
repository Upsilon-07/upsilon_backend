const FavouritesMeal = require("../models/favouriteMeals.model");

const postIsFavouriteMeal = (req, res) => {
 const { user_id, meal_id } = req.body;

  FavouritesMeal.checkIfFavouriteMealsExists(user_id, meal_id)
    .then((result) => {
      
      if (result && result.length > 0) {
        FavouritesMeal.deleteFavouriteMeal(user_id, meal_id)
          .then((results) => {
            if (results.affectedRows > 0) {
             res.status(200).send("Favourite deleted successfully");
            } else {
              res.status(422).send("Unprocessable Entity - unable to process");
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error deleting favourite");
          });
      } else {
        FavouritesMeal.createNewFavouriteMeal(req.body)
          .then((results) => {
            if (results.affectedRows > 0) {
             res.status(200).send("Favourite created successfully");
            } else {
             res.status(422).send("Unprocessable Entity - unable to process");
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error creating favourite");
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error verifying favourite");
    });
};

const getFavouriteMeals = (req, res) => {
    
    FavouritesMeal.getAllFavouriteMealsByUser(req.query.userId)
    .then((favouriteMealsByUser) => {
        //  console.log(favouriteMealsByUser)
      if (
        favouriteMealsByUser !== null &&
        favouriteMealsByUser.length > 0
      ) {
        const isFavouriteMeal = true
         res.status(200).send(favouriteMealsByUser);
      } else {
        //const isFavourite = false
        res.status(404).send("No favourite meals found in DB");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error finding favourite courses");
    });
};

module.exports = {
    postIsFavouriteMeal,
    getFavouriteMeals
};