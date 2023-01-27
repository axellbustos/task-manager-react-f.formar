const express = require('express'); 
const router = express.Router();
const {userRegister,userLogin,userVerify,sendToken,tokenVerify,changePassword}=require("../controllers/authControllers")

/* GET home page. */
router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/verify', userVerify);
router.post('/sendToken', sendToken);
router.route('/resetPassword')//es como una ruta dentro de otra, se pasa la ruta compartida y despues se especifica el metodo
    .get(tokenVerify)
    .post(changePassword)
    
module.exports = router;
