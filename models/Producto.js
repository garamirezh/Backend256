const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({

    nombre:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true,
        min:0
    },
    categoria:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true,
        min:0,
    },
    disponible:{
        type: Boolean,
        default: true,
    },
    fechaCreacion:{
        type: Date,
        required:true
    },
    ultimaActualizacion:{
        type: Date,
        required:true
    }
}, {versionkey:false});

module.exports = mongoose.model('Producto', productoSchema);