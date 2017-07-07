var mongoose = require("mongoose");

const ola = "mongodb://" + process.env.IP + "/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(ola, {
    useMongoClient: true
});

module.exports = {mongoose};