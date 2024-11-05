const Producto = require('../models/Producto');

exports.agregarProductos = async (req, res)  => {
    try {
        let productos;
        productos = new Producto(req.body);
        await productos.save();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al agregar el producto");   
    }
}

exports.buscarProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
        console.log(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar los productos');
    }
}

exports.mostrarProductos =  async(req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos) {
            res.status(404).send({msg: 'Producto no encontrado con ese ID'});
        }else{
            res.json(productos);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar un producto');
    }
}

exports.modificarProductos = async(req,res) => {
    try {
        const productos = await Producto.findByIdAndUpdate(req.params.id,req.body, {new:true});
        if (!productos) {
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
        } else {
            res.json(productos);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar el producto');
    }
}

exports.actualizarProductos =  async(req,res) => {
    try {
        const {nombre, descripcion, precio, categoria, stock, disponible, fechaCreacion, ultimaActualizacion} = req.body
        let productos = await Producto.findById(req.params.id);

        if (!productos){
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
        } else{
            productos.nombre = nombre;
            productos.descripcion = descripcion;
            productos.precio = precio;
            productos.categoria = categoria;
            productos.stock = stock;
            productos.disponible = disponible;
            productos.fechaCreacion = fechaCreacion;
            productos.ultimaActualizacion = ultimaActualizacion;

            productos = await Producto.findOneUpdate({_id: req.params.id}, req.body, {new:true});
            res.json(productos)
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar el producto');
    }
}

exports.eliminarProductos = async(req,res) => {
    try {
        let productos = await Producto.findById(req.params.id);
        if (!productos){
            res.status(404).send({msg: "Producto no encontrado con ese ID"});
        } else{
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Producto eliminada"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar el producto')     
    }
}