const express = require('express');
const path = require('path')
const config = require('config');

const app = express();

const PORT = config.get('PORT') || 5000;

if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React app
    app.use('/', express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

async function start() {
    try {
        app.listen(5000, () => { console.log(`App has been started on PORT ${PORT}...`); });
    } catch (e) {
        console.log('Server Error', e.message, e);
        process.exit(1);
    }
}

start();