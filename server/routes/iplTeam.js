const express = require('express');
const mongoose = require('mongoose');
const IplTeam = require('../models/iplteam');


const router = express.Router();

router.get('/iplTeams', function (req, res) {
    console.log("Get request for all ipl teams");
    IplTeam.find({})
        .exec(function (err, teams) {
            if (err) {
                console.log("Error retieving teams");
            } else {
                res.json(teams);
            }
        })
});


router.post('/iplTeam', function (req, res) {
    console.log('Post request to add an ipl team to the database');
    var newIplTeam = new IplTeam();
    newIplTeam.code = req.body.code;
    newIplTeam.name = req.body.name;

    newIplTeam.save(function (err, insertedTeam) {
        if (err) {
            console.log("Error saving ipl team");
        } else {
            res.json(insertedTeam);
        }
    })

})

router.put('/iplTeams/:id', function (req, res) {
    console.log("Updating ipl team with id "+ req.params.id) ;
    IplTeam.findByIdAndUpdate(req.params.id,
        {
            $set :{ code: req.body.code, name: req.body.name }
        },
        {
            new: true
        },
        function (err, updatedIplTeam) {
            if (err) {
                console.log("Error updating ipl team ");
            } else {
                res.json(updatedIplTeam);
            }
        }
    );

});

router.delete('/iplTeam/:id', function (req, res) {
    console.log('deleting ipl team');

    IplTeam.findByIdAndRemove(req.params.id, function (err, deletedTeam) {
        if (err) {
            res.send("Error deleting ipl team: "+ id);
        } else {
            res.json(deletedTeam);
        }
    });
});

module.exports = router;