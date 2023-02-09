const { errorResponse } = require("../helpers/errorResponse")
const{verify}=require("jsonwebtoken")
const createHttpError = require("http-errors")
const User = require("../database/models/User")

module.exports = async (req,res,next)=>{

    try {
        if (!req.headers.authorization) {
            throw createHttpError(401,"se requiere token")
        }
        const token=req.headers.authorization
        const decode= verify(token, process.env.JWT_SECRET)
        
        req.user = await User.findById(decode.id).select("-password -checked -token -createdAt -updatedAt -__v")// - para que no traiga y ej name , email para que solo traiga esos
        
        next()

    } catch (error) {
        errorResponse(res,error,"surgio un problema al verifycar el token, contacte al administrador")
    }
}