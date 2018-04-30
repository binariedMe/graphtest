module.exports = `

type Reservation {
  id: String,
  name: String!,
  hotelName: String!,
  arrivalDate: Date!,
  departureDate: Date!
}

type Query {
  reservations(name: String, hotelName: String, arrivalDate: String, departureDate: String): [Reservation!]!
  reservation(id: String!): Reservation!
}

type Mutation {
  reservation(name: String!, hotelName: String!, arrivalDate: Date!, departureDate: Date!): String!
}

scalar Date

`;
