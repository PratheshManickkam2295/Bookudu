const UserRouter = require("express").Router();
const UserModal = require("../Models/Users.modal");
// GET ALL THE USERS
/**
 *METHOD = GET
 *REQUEST = {}
 *RESPONSE = ARRAY<USERS>
 */
UserRouter.get("/", (req, res, next) => {
  UserModal.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return res.status(200).json({
          data: cursor,
          success: true,
          message: "Hall fetched successfully!!!!",
        });
      } else {
        return res.status(200).json({
          data: [],
          success: true,
          message: "No Data Found!!!!",
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        data: cursor,
        success: false,
        message: "Error Fetching Hall Data!!!!",
        error: err,
      });
    });
});

module.exports = UserRouter;
