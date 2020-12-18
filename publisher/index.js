// import libs
const express = require('express');
const redis   = require('redis');

// create redis client
const publisher = redis.createClient();

// create express app
const app = express();

/**
 * publish user data via redis
 */
app.get('/', (req, res) => {
    const user = {
        id: 123,
        name: 'Sina'
    };

    publisher.publish('user-notify', JSON.stringify(user));
    return res.send('Publishing an event using redis !');
});


// start the server
app.listen(3000, () => {
    console.log('server is listening on port 3000');
});