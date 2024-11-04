const mongoose = require('mongoose');
require('dotenv').config();

const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados con mongoDB"))
    .catch((err) => console.log("Error al conectar a MongoDB:", err));
}

module.exports = conectarBD;
