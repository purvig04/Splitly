const express = require('express')
const router = express.Router()
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

const { getRegister,postLogin,postRegister, getHome, getLogout } = require('../controllers/authController');


router.get('/register',getRegister)
router.post('/register',postRegister);
router.post("/login", postLogin);
router.get('/home',requireAuth,checkUser,getHome)
router.get('/logout',getLogout)

module.exports = router;