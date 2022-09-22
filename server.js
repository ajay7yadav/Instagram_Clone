const express = require('express');
const app = express();

const bodyParser = require('body-parser');  // convert json to js obj || js obj to json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const Port = require('./configs/serverConfig');

mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("DB Connected");
});

app.listen(Port.PORT, ()=>{
    console.log(`Server is running on port no : ${Port.PORT}`);
});