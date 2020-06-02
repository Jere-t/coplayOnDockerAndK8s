// index.js

const Hapi = require('@hapi/hapi');
import routes from './routes/index';
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const server = Hapi.server({
    port: process.env.PORT || 3001,
    host: '0.0.0.0',
    routes: { cors: true }
});
console.log(process.env.DB_HOST);


const init = async () => {

  //to add api prefix to all routes
  server.realm.modifiers.route.prefix = '/api'
  //attached all routes
  await server.route(routes);

  // documentation info
  const swaggerOptions = {
      info: {
          title: 'CoPlay API Documentation',
          version: '1.0',
      },
  };

  //Documentation
  await server.register([
      Inert,
      Vision,
      {
          plugin: HapiSwagger,
          options: swaggerOptions
      }
  ]);

  //Server start
  await server.start();
  console.log(`Server running on ${server.info.uri}/api`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
