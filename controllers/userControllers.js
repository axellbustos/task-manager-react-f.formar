module.exports={
    userProfile:async(req, res)=>{
        try {
            return res.status(201).json({
                ok:true,
                msg:"User profile",
                user: req.user
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok:false,
                msg: error.message || "User profile failed, contact administrator"
            })
        }
    }
}