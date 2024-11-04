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
        enum:['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Otros'],
        default: 'Otros',
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
        default: Date.now,
    },
    ultimaActualizacion:{
        type: Date,
        default: Date.now,
    }
}, {versionkey:false});

module.exports = mongoose.model('Producto', productoSchema);