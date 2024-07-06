const mongoose = require("mongoose");
const { Schema } = mongoose;

// CREATING MONGOOSE SCHEMA
// SCHEMA IS THE BLUEPRINT OF THE DATA THAT WE NEED TO STORE
const BookingsSchema = new Schema({
  mahalId: Schema.Types.ObjectId,
  customerId: Schema.Types.ObjectId,
  bookingsDetails: {
    startDate: Date,
    endDate: Date,
    totalBookingPrice: Number,
  },
  createdAt: Date,
  updatedAt: Date,
  createdBy: Schema.Types.ObjectId,
  updatedBy: Schema.Types.ObjectId,
});

module.exports = mongoose.model("bookings", BookingsSchema);
