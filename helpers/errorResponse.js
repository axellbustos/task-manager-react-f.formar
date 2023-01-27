const errorResponse=(res,error, message)=>{
    console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || `${message}`
            })
}
module.exports={
errorResponse
}