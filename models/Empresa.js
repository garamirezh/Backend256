const mongoose = require('mongoose');

const empresaSchema = mongoose.Schema({

    razonsocial:{
        type:String,
        required: true
    },
    nit:{
        type:Number,
        required: true
    },
    numeroempleados:{
        type:Number,
        required: true
    },
    ciudad:{
        type:String,
        required: true
    },
    telefono:{
        type:Number,
        required: true
    },
    direccion:{
        type:String,
        required: true
    },
    nombrecontacto:{
        type:String,
        required: true
    }
},{versionkey:false});

module.exports = mongoose.model('Empresa', empresaSchema);