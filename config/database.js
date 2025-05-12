const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {

    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( () => {
        console.log("Db is Successful done");
    })
    .catch( (error) => {
        console.log("db is recieved an error", error);
        process.exit(1);
    })
}

module.exports = dbConnect;