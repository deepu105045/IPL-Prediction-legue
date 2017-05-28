const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TournamentSchema = new Schema({
    tournamentName: String,
    year: String,
    sport: String,
    gameFormat: String,
    numberOfMatches: String,
    gameLines: [
        {
            gameDateTime: String,
            venue: String,
            team1: String,
            team2: String
        }
    ]
})

module.exports = mongoose.model('Tournament', TournamentSchema,'Tournament');