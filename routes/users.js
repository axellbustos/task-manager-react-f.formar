const express = require('express');
const router = express.Router();
const { userProfile }=require("../controllers/userControllers");
const checkToken = require('../middlewares/checkToken');

/* GET home page. */
router.get('/profile', checkToken, userProfile );

module.exports = router;