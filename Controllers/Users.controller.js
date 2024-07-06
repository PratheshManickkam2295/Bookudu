const UserRouter = require("express").Router();
const UserModel = require("../Models/Users.model");

// GET ALL THE USERS
/**
 *METHOD = GET
 *REQUEST = {}
 *RESPONSE = ARRAY<USERS>
 */
UserRouter.get("/", (req, res, next) => {
  UserModel.find()
    .then((cursor) => {
      if (cursor && cursor.length > 0) {
        return res.status(200).json({
          data: cursor,
          success: true,
          message: "Users fetched successfully!!!!",
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
        message: "Error Fetching Users Data!!!!",
        error: err,
      });
    });
});
// CREATE A USER
/**
 *METHOD = POST
 *REQUEST - OBJECT<USER>
 *RESPONSE - {}
 */
UserRouter.post("/create", (req, res, next) => {
  const data = req.body;
  const User = new UserModel(data);
  User.save()
    .then((result) => {
      console.log(result);
      if (result && result._id) {
        return res.status(200).json({
          messages: "User Created Successfully!!",
          data: result,
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({
        messages: "Alas! Error Creating User!!",
        error: err,
      });
    });
});

module.exports = UserRouter;
