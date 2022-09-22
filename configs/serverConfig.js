// If it not production machine then find port from env file

if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}

module.exports = {
    PORT : process.env.PORT
};