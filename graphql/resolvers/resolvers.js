const GraphQLDate = require('../../utils/GraphQLDate');
const reservationUtil = require('../../utils/reservationUtil');
module.exports = {
  Query: {
    reservations: async (parent, args, { Reservation }) => {
      const reservations = await Reservation.find(args);
      return reservations.map((x) => {
        delete x._id;
        return x;
      });
    },
    reservation: async (parent, args, { Reservation }) => {
      const reservation = await Reservation.find(args);
      return reservation.map((x) => {
        delete x._id;
        return x;
      }).pop();
    }
  },
  Mutation: {
    reservation: async (parent, args, { Reservation }) => {
      args.id = reservationUtil.generateId(args.name);
      args.arrivalDate = new Date(args.arrivalDate);
      args.departureDate = new Date(args.departureDate);
      const reservation = await new Reservation(args).save();
      return reservation.id;
    }
  },
  Date: GraphQLDate
};
