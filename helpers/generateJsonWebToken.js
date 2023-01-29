const jwt = require("jsonwebtoken")

module.exports = (payload)=>{
    jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'1h'})//recibe 3 parametros carga clave(.env) y duracion
    //buscar sing
}