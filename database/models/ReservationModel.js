const MongoConnection = require('../provider/Mongo');

const Reservation = MongoConnection.model('Reservation', {
  id: String,
  name: String,
  hotelName: String,
  arrivalDate: Date,
  departureDate: Date
});

module.exports = Reservation;
