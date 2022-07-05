const mongoose = require('mongoose')

const connectDB = () => {
    let mongo_username = process.env.MONGO_USERNAME;
    let mongo_password = process.env.MONGO_PASSWORD;
    let mongo_connection = process.env.MONGO_CONNECTION;
    let mongo_dbname = process.env.MONGO_DBNAME;


    if (mongo_username != '' && mongo_password != '') {
        connection_uri = `mongodb://${mongo_username}:${mongo_password}@${mongo_connection}/${mongo_dbname}?authSource=admin`;
    } else {
        connection_uri = `mongodb://${mongo_connection}/${mongo_dbname}?authSource=admin`;
    }
    return mongoose.connect(connection_uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB