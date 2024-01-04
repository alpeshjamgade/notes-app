const mongoose = require('mongoose')
const config = require('config');


mongoose.connect(
    config.get('DB_URL'),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
