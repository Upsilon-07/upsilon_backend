const Favourites = require("../models/favourites.model");

const postIsFavourite = (req, res) => {
  const { user_id, course_id } = req.body;

  Favourites.checkIfFavouriteExists(user_id, course_id)
    .then((result) => {
      if (result && result.length > 0) {
        Favourites.deleteFavourite(user_id, course_id)
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
        Favourites.createNewFavourite(req.body)
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

const getFavouriteCourses = (req, res) => {
  Favourites.getAllFavouriteCoursesByUser(req.query.userId)
    .then((favouriteCoursesByUser) => {
      if (
        favouriteCoursesByUser !== null &&
        favouriteCoursesByUser.length > 0
      ) {
        res.status(200).send(favouriteCoursesByUser);
      } else {
        res.status(404).send("No favourite courses found in DB");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error finding favourite courses");
    });
};

module.exports = {
  postIsFavourite,
  getFavouriteCourses,
};
