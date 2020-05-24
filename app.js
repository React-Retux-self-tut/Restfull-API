const express = require('express');

const app = express();



//middlewares in express
    //---- functions that execute

    app.use('/post', () => {
        console.log('This is a middleware running')
    });

//ROUTES

app.get('/', (req, res) => {
    res.send(
        "We are on home - page"
    );
});
app.get('/post', (req, res) => {
    res.send(
        "We are on home - post"
    );
});


//HOW DO WE START LISTENNING TO THE SERVER

app.listen(4000);