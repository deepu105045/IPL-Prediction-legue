const mongoose = require('mongoose');
const url='mongodb://127.0.0.1/predictions';

mongoose.Promise = global.Promise;
mongoose.connect(url, function (err) {
    if (err) {
        console.log("Error connecting to mongo db: " + err);
    } else {
        console.log("Connection established.")
    }
});

module.exports=mongoose;