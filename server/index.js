const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    main_ctrl = require('../controllers/main_ctrl'),
    port = 3000;


// Middlewares

app.use(bodyParser.json());
app.use(cors());

// Endpoints

app.get('/api/userName', main_ctrl.getName)

app.get('/api/userLocation', main_ctrl.getLocation)

app.get('/api/userOccupations', main_ctrl.getOccupations)

app.get('/api/userLatestOccupation', main_ctrl.getLatestOccupation)

app.get('/api/userHobbies', main_ctrl.getHobbies)

app.get('/api/userHobbies/:type', main_ctrl.getHobbiesType)

app.listen(port, () => console.log(`Listening on port ${port}`))