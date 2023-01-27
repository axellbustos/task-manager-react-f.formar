const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({//creamos el esquema y le pasamos las propiedades
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
    client: {
        type: String,
        require: true,
        trim: true
    },
    createBy: {//trae los datos del usuario, como si fuera relacional
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    partners: [
        {//trae los datos de los colaboradores, como si fuera relacional
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]

}, {
    timestamps: true //marcas de tiempo
})


module.exports = mongoose.model('Proyect', projectSchema)//alias y el modelo