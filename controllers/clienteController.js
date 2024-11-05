const Cliente = require('../models/Cliente');

exports.agregarClientes = async (req, res) => {
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al agregar cliente");
    }
}

exports.buscarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
        console.log(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar los clientes');
    }
}

exports.mostrarClientes = async(req, res) => {
    try {
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar un cliente');
    }
}

exports.modificarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar un cliente');
    }
}

exports.actualizarClientes = async(req, res) => {
    try {
        const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let clientes = await Cliente.findById(req.params.id);
      
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
            return
        }else{
            clientes.nombres = nombres;
            clientes.apellidos = apellidos;
            clientes.documento = documento;
            clientes.correo = correo;
            clientes.telefono = telefono;
            clientes.direccion = direccion;

            clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar los clientes');
    }
}

exports.eliminarClientes = async(req, res) => {
    try{
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "Cliente no encontrado con ese ID"});
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Cliente eliminado"})
        }
    }catch(error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar un cliente');
    }
}

/* try {
    const {nombres, apellidos, documento, correo, telefono, direccion} = req.body
    let cliente 
    const clientes = await Cliente.findOneUpdate({_id: req.params.id}, req.body, {new:true});
    if(!clientes){
        res.status(404).send({msg: "Cliente no encontrado con ese ID"});
    }else{
        res.json(clientes);
    }
} catch (error) {
    console.log(error);
    res.status(500).send('hubo un error al actualizar los clientes');
} */