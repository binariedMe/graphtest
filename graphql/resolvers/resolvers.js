const GraphQLDate = require('../../utils/GraphQLDate');
const ReservationUtil = require('../../utils/reservationUtil');

module.exports = {
  Query: {
    reservations: (parent, args, { Reservation }) => {
      return ReservationUtil.getReservations(args, Reservation);
    },
    reservation: (parent, args, { Reservation }) => {
      return ReservationUtil.getReservationById(args.id, Reservation);
    }
  },
  Mutation: {
    reservation: (parent, args, { Reservation }) => {
      return ReservationUtil.saveReservation(args, Reservation);
    }
  },
  Date: GraphQLDate
};
