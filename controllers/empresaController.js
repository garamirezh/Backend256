const Empresa = require('../models/Empresa');

exports.agregarEmpresas = async (req, res) => {
    try {
        let empresas;
        empresas = new Empresa(req.body);
        await empresas.save();
        res.json(empresas);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al agregar la empresa");
    }
}

exports.buscarEmpresas= async(req, res) => {
    try {
        const empresas = await Empresa.find();
        res.json(empresas);
        console.log(empresas);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar las empresas');
    }
}

exports.mostrarEmpresas = async(req, res) => {
    try {
        let empresas = await Empresa.findById(req.params.id);
        if(!empresas){
            res.status(404).send({msg: "Empresa no encontrado con ese ID"});
        }else{
            res.json(empresas);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar una empresa');
    }
}

exports.modificarEmpresas = async(req, res) => {
    try {
        const empresas = await Empresa.findByIdAndUpdate(req.params.id, req.body, {new:true}); 
        if(!empresas){
            res.status(404).send({msg: "Empresa no encontrado con ese ID"});
        }else{
            res.json(empresas);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar la empresa');
    }
}

exports.actualizarEmpresas = async(req, res) => {
    try {
        const empresas = await Empresa.findOneUpdate({_id: req.params.id}, req.body, {new:true});
        if(!empresas){
            res.status(404).send({msg: "Empresa no encontrado con ese ID"});
        }else{
            res.json(empresas);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al actualizar la empresa');
    }
}

exports.eliminarEmpresas = async(req, res) => {
    try{
        let empresas = await Empresa.findById(req.params.id);
        if(!empresas){
            res.status(404).send({msg: "Empresa no encontrado con ese ID"});
        }else{
            await Empresa.findOneAndDelete({_id: req.params.id});
            res.json({msg: "Empresa eliminada"});
        }
    }catch(error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar la empresa');
    }
}