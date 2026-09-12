const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


const databaseConnection = require('./config/db');
const studentsRoutes = require('./routes/students.routes');

const app = express();

dotenv.config();

const port = process.env.PORT || 2500;

app.use(express.json());
app.use(morgan('dev'));
 

app.get("/", (req, res) => {
    res.send("Welcome OfficialBam🪔🦅");
});

app.use('/students', studentsRoutes);

app.listen(port, () => {
    databaseConnection();
    console.log(`Server is running on port ${port}`);
});