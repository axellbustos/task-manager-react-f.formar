const mongoose = require("mongoose")
const{hash, compare}=require("bcryptjs")

const userSchema = new mongoose.Schema({//creamos el esquema y le pasamos las propiedades
    name:{
        type:String,
        require: true,
        trim: true
    },
    email:{
        type:String,
        require: true,
        trim: true,
        unique:true
    },
    password:{
        type:String,
        require: true,
        trim: true
    },
    token:{
        type:String
    },
    checked:{
        type:Boolean,
        default: false
    }
},{
    timestamps:true //marcas de tiempo
})

//el methodo pre ejecuta codigo antes de ser enviado, en este caso hasheo de contraseña
userSchema.pre("save", async function (next) {//para usar "this" se debe poner funtion normal y no en flecha

    if (!this.isModified('password')) {
        next()
    }

    this.password = await hash(this.password, 10)
})
//methods crea un metodo :)
userSchema.methods.checkedPassword = async function (password) {
    return await compare(password, this.password)//comparta las contraseñas y devuelve booleano
}
module.exports = mongoose.model('User', userSchema)//alias y el modelo