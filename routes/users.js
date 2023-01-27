const express = require('express');
const router = express.Router();
const { userProfile }=require("../controllers/userControllers")

/* GET home page. */
router.post('/profile', userProfile );

module.exports = router;