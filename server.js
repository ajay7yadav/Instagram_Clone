const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');  // file upload

const bodyParser = require('body-parser');  // convert json to js obj || js obj to json
app.use(bodyParser.json());

const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const Port = require('./configs/serverConfig');

mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("DB Connected");
});


app.use(fileUpload({
    useTempFiles : true
}));


require('./routes/auth_API')(app);
require('./routes/post_API')(app);
require('./routes/like_API')(app);

app.listen(Port.PORT, ()=>{
    console.log(`Server is running on port no : ${Port.PORT}`);
});