const createError = require('http-errors');
const {errorResponse}=require("../helpers/errorResponse")//-------utilizar----------

module.exports={
    userRegister:async(req, res)=>{

        const {name, email, password}=req.body

        if ([name, email, password].includes("")) {//si los campos incluyen datos vacios creo un error con su respectivo status
            throw createError(400,"Los campos no pueden estar vacios")
        }

        try {
            return res.status(201).json({
                ok:true,
                msg:"User registration has been successful"
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
        try {
            return res.status(201).json({
                ok:true,
                msg:"User login has been successful"
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
        try {
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
        try {
            return res.status(201).json({
                ok:true,
                msg:"key token sent"
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