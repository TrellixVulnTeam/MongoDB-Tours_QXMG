var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

var Hapi = require('hapi');
var server = new Hapi.Server({ port: 8080, host: 'localhost'});

server.route( [
    // Get tour list
    {
        method: 'GET',
        path: '/api/tours',
        handler: function(request, reply) {
          return "Getting tour list!";
        }
    },
    // Add new tour
    {
        method: 'POST',
        path: '/api/tours',
        handler: function(request, reply) {
          return "Adding new tour";
        }
    },
    // Get a single tour
    {
        method: 'GET',
        path: '/api/tours/{name}',
        handler: function(request, reply) {
          return "Retrieving " + request.params.name;
        }
    },
    // Update a single tour
    {
        method: 'PUT',
        path: '/api/tours/{name}',
        handler: function(request, reply) {
            // request.payload variables
            return "Updating " + request.params.name;
        }
    },
    // Delete a single tour
    {
        method: 'DELETE',
        path: '/api/tours/{name}',
        handler: function(request, reply) {
          return "Deleting " + request.params.name;
        }
    },
    // Home page
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
          return "Hello world from Hapi/Mongo example.";
        }
    }
]);

MongoClient.connect(url, function(err, client){
  console.log("Connected successfully to server");
  var db = client.db('learning_mongo');
  collection = db.collection('tours');

  server.start(function(err) {
      console.log('Hapi is listening to http://localhost:8080')
  });
});
