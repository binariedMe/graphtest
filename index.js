const express = require('express');
const bodyParser = require('body-parser');
const graphiqlExpress = require('apollo-server-express').graphiqlExpress;
const graphqlExpress = require('apollo-server-express').graphqlExpress;
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
const Reservation = require('./database/models/ReservationModel');
const typeDefs = require('./graphql/schema/schema');
const resolvers = require('./graphql/resolvers/resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { Reservation } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(process.env.PORT || PORT);
