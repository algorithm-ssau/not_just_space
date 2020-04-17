const express = require('express');
const config = require('config');

const app = express();

const PORT = config.get('PORT') || 5000;



async function start() {
    try {
        // await mongoose.connect(config.get('mongoUri'), {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // });
        app.listen(5000, () => { console.log(`App has been started on PORT ${PORT}...`); });
    } catch (e) {
        console.log('Server Error', e.message, e);
        process.exit(1);
    }
}

start();