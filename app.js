const express = require('express');
const { init } = require('./database/mongodb');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./database/mongodb');
const notFound = require('./middleware/not-found')

//middleware
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);

const port = 3001;

const start = async () => {
    try {
        await connectDB();
        app.listen(port, console.log(`server is listening on port ${port}...`));
    } catch (e) {
        console.log(e);
    }
}
start();