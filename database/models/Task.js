const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({//creamos el esquema y le pasamos las propiedades
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    dataExpire: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: Boolean,
        default: false
    },
    createBy: {//trae los datos del usuario, como si fuera relacional
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    priority:{
        type: String,
        enum:['Baja','Media','Alta'],
        default:'Baja'
    },
    project: {//trae los datos del proyecto al que pertenece, como si fuera relacional
        type: mongoose.Schema.Types.ObjectId,
        ref: "Proyect"
    }

}, {
    timestamps: true //marcas de tiempo
})


module.exports = mongoose.model('Task', taskSchema)//alias y el modelo