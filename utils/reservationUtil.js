
class ReservationUtil {
  static generateId(name) {
    return `${+new Date()}_${name.replace(/ /g, '_')}`;
  }

  static async getReservationById(id, model) {
    const reservation = await model.find({ id });
    return reservation.pop();
  }

  static async saveReservation(reservation, model) {
    reservation.id = this.generateId(reservation.name);
    reservation.arrivalDate = new Date(reservation.arrivalDate);
    reservation.departureDate = new Date(reservation.departureDate);
    const savedReservation = await new model(reservation).save();
    return savedReservation.id;
  }

  static async getReservations(filter, model) {
    const reservations = await model.find(filter);
    return reservations;
  }
}

module.exports = ReservationUtil;
