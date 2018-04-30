const mongoose = require('../provider/Mongo');

const Reservation = mongoose.model('Reservation', {
  id: String,
  name: String,
  hotelName: String,
  arrivalDate: Date,
  departureDate: Date
});

module.exports = Reservation;
