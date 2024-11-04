const express = require('express');
const conectarBD = require('../config/db');
const cors  = require('cors');

//Creamos varibles de la app
const app = express();
const port = process.env.PORT || 5000;

//conectar base de datos
conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la api de clientes
app.use('/api/clientes', require('../routes/routesCliente'));
app.use('/api/empresas', require('../routes/routesEmpresa'));
app.use('/api/productos', require('../routes/routesProducto'));

// ruta para verificar nuestro servidor
app.get('/', (req, res) => {
    res.send("hola estamos conectados desde la web")
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});