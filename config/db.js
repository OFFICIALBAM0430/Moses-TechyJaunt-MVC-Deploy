const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();



const dbUrl = process.env.DB_URL;

const databaseConnection = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection fail");
    };
};

module.exports = databaseConnection;