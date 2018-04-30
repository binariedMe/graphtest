const express = require('express');
const bodyParser = require('body-parser');
const graphiqlExpress = require('apollo-server-express').graphiqlExpress;
const graphqlExpress = require('apollo-server-express').graphqlExpress;
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const Reservation = require('./database/models/ReservationModel');
const typeDefs = require('./graphql/schema/schema');
const resolvers = require('./graphql/resolvers/resolvers');
const ReservationUtil = require('./utils/reservationUtil');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Reservation } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/reservation/:ID', (req, res) => {
  const ID = req.params.ID;
  ReservationUtil.getReservationById(ID, Reservation).then((reservation) => {
    res.send(reservation);
  })
});

app.get('/reservations', (req, res) => {
  ReservationUtil.getReservations(req.query, Reservation).then((reservations) => {
    res.send(reservations);
  });
});

app.post('/reservation', (req, res) => {
  ReservationUtil.saveReservation(req.body, Reservation).then(reservationId => {
    res.send({ reservationId });
  });
});

app.listen(process.env.PORT || PORT);
