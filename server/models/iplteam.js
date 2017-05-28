// grab the mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IplTeamSchema = new Schema({
    code : String,
    name : String,
})

module.exports = mongoose.model('iplteam',IplTeamSchema,'iplteams')