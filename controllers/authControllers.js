const createError = require('http-errors');
const {errorResponse}=require("../helpers/errorResponse")//-------utilizar----------
const sendMails=require("../helpers/sendMails")//-------utilizar----------
const User = require('../database/models/User');
const generateTokenRandom =require("../helpers/generateTokenRandom")
const generateJsonWebToken =require("../helpers/generateJsonWebToken");
const { confirmRegister, forgotPassword } = require('../helpers/sendMails');

module.exports={
    userRegister:async(req, res)=>{

        const {name, email, password}=req.body

        try {
            if ([name, email, password].includes("")) {//si los campos incluyen datos vacios creo un error con su respectivo status
                throw createError(400,"Los campos no pueden estar vacios")
            }

            let user = await User.findOne({email})
            if (user) {
                throw createError(400,"Este email ya se encuentra registrado, pruebe iniciar session o ingrese otro email")
            }
            const token=generateTokenRandom()
    
            user = new User(req.body)
            user.token = token
            const userStore= await user.save()

            //enviar email de confirmacion llamando la funcion y pasandole lo que necesita
            await confirmRegister({
                name: userStore.name,
                email: userStore.email,
                token: userStore.token
            })
            return res.status(201).json({
                ok:true,
                msg:"User registration has been successful",
                data: userStore
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "User registration failed, contact administrator"
            })
        }
    },
    userLogin:async(req, res)=>{

        const {email, password}=req.body
        
        try {

            if ([email, password].includes("")) {//si los campos incluyen datos vacios creo un error con su respectivo status
                throw createError(400,"Los campos no pueden estar vacios")
            }
            let user = await User.findOne({email})

            if (!user) {
                throw createError(403,"Credenciales invalidas")
            }
            
            if (!user.checked) {
                throw createError(403,"La cuenta no ha sido activada")
            }

            if (!await user.checkedPassword(password)) {
                throw createError(403,"Credenciales invalidas")
            }

            return res.status(201).json({
                ok:true,
                msg:"User login has been successful",
                user:{
                    nombre:user.name,
                    email: user.email,
                    token:generateJsonWebToken({id:user._id})//revisar
                }
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "User login failed, contact administrator"
            })
        }
    },
    userVerify:async(req, res)=>{

        const {token}=req.query //pedir en la ruta el token

        try {

            if (!token) {
                throw createError(400,"Token inexistente")
            }
            const user= await User.findOne({token})

            if (!user) {
                throw createError(400,"Token invalido")
            }

            user.checked= true
            user.token=""//se deja sin efecto el token anterior
            await user.save()

            return res.status(201).json({
                ok:true,
                msg:"The email has been successfully verified"
                
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "The email could not be verified, contact administrator"
            })
        }
    },
    sendToken:async(req, res)=>{

        const {email}=req.body

        try {

            let user = await User.findOne({
                email
            })

            if (!user) {
                throw createError(400,"el email no se encuentra registrado")
            }

            const token=generateTokenRandom()
            user.token = token
            await user.save()
            //enviar email para reestablecer pass
            await forgotPassword({
                name: user.name,
                email: user.email,
                token: user.token
            })
            return res.status(201).json({
                ok:true,
                msg:"key token sent"//cambiar mensaje
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "error creating token key, contact administrator"
            })
        }
    },
    tokenVerify:async(req, res)=>{
        try {

            const {token}=req.query
            if(!token){
                throw createError(400,"No hay token en la ruta")
            }

            let user = await User.findOne({
                token
            })
            if(!user){
                throw createError(400,"Token invalido")
            }


            return res.status(201).json({
                ok:true,
                msg:"The token key has been successfully verified"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "The token key could not be verified, contact administrator"
            })
        }
    },
    changePassword:async(req, res)=>{
        try {

            const{token}=req.query
            const{password}=req.body//post

            if(!password){
                throw createError(400,"La contraseña es obligatoria")
            }

            let user = await User.findOne({
                token
            })

            if(!user){
                throw createError(400,"Token invalido")
            }
            
            user.password= password
            user.token=""
            await user.save()

            return res.status(201).json({
                ok:true,
                msg:"successfully changed password"
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "error changing password, contact administrator"
            })
        }
    }
}
//TODO color
//?
//!
//^ 
//*
//&
//~
