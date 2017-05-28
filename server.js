// modules =================================================
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');

// config files
var db = require('./server/config/db');

// set our port
const port = 3001;

// Get our API routes
const iplTeamApi = require('./server/routes/iplTeam');
const tournamentApi = require('./server/routes/tournament');


const app = express();
app.use(cors())

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers for POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function () {
    console.log("Server running on localhost: " + port);
});

// Catch all other routes and return the index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set our api routes
app.use('/api', iplTeamApi);
app.use('/api', tournamentApi);


// expose app           
exports = module.exports = app;


