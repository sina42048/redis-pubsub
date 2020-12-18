// import libs
const express = require('express');
const redis = require('redis');

// create client
const subscriber = redis.createClient();
subscriber.on('message' , (channel, message) => {
    console.log(`data ${message} | from channel ${channel}` );
});

// creat express app
const app = express();

app.get('/', (req, res) => {
    res.send('Subscriber Two');
});

subscriber.subscribe("user-notify");

app.listen(3002, (req, res) => {
    console.log('server is listening on port 3001');
});