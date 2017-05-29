const express = require('express');
const mongoose = require('mongoose');
const Tournament = require('../models/tournament');
const router = express.Router();

router.get('/tournaments', function (req, res) {
    console.log("Get request for all tournaments");
    Tournament.find({})
        .exec(function (err, tournaments) {
            if (err) {
                console.log("Error retieving tournaments");
            } else {
                res.json(tournaments);
            }
        })
});

// router.delete('/tournament/:id', function (req, res) {
//     console.log('deleting tournament');

//     Tournament.findByIdAndRemove(req.params.id, function (err, deletedItem) {
//         if (err) {
//             res.send("Error deleting tournament: "+ id);
//         } else {
//             res.json(deletedItem);
//         }
//     });
// });

router.post('/tournament', function (req, res) {
    console.log('Post a tournament');
    var newTournament = new Tournament();
    newTournament.tournamentName=req.body.tournamentName;
    newTournament.year=req.body.year;
    newTournament.sport = req.body.sport;
    newTournament.gameFormat=req.body.gameFormat;
    newTournament.gameLines=req.body.gameLines;

    console.log("Request: " + req.body.gameLines[0].gameDateTime);
    newTournament.save(function (err, insertedData) {
        if (err) {
            console.log("Error saving tournament");
        } else {
            res.json(insertedData);
        }
    })
})

// router.put('/tournament/:id', function (req, res) {
//     console.log("updating tournament data...");
//     Team.findByIdAndUpdate(req.params.id,
//         {
//             $set :{ code: req.body.code, name: req.body.name }
//         },
//         {
//             new: true
//         },
//         function (err, updatedVideo) {
//             if (err) {
//                 console.log("Error updating tournament data");
//             } else {
//                 res.json(updatedVideo);
//             }
//         }
//     );

// });




module.exports = router;