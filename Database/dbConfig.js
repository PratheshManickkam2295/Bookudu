const mongoose = require("mongoose");
const BASE_URL =
  process.env.NODE_ENVIRONMENT === "development"
    ? `mongodb://localhost:27017/${process.env.DEVELOPMENT_MONGO_DB_NAME}`
    : `mongodb+srv://${process.env.PRODUCTION_MONGO_DB_USER_NAME}:${process.env.PRODUCTION_MONGO_DB_PASSWORD}@bookududb.rubs5wb 
    .mongodb.net/${process.env.PRODUCTION_MONGO_DB_NAME}?retryWrites=true&w=majority&appName=BookuduDB`;

mongoose
  .connect(BASE_URL)
  .then((response) => {
    if (response) {
      console.log("DATABASE CONNECTION SUCCESSFUL");
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  })
  .catch((err) => {
    if (err) {
      console.log("ERROR CONNECTING DATABASE", err);
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  });
