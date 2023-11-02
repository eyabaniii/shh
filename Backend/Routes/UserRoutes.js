const express=require("express")
const auth = require('../Middleware/auth');

const { register, login } = require("../Controllers/UserController")
const { registerValidation, Validator } = require("../Middleware/validator")
// require router
const router = express.Router()

 // add new product
 router.post('/register',registerValidation(),Validator,register)
// login
router.post('/login',login)
// login

// current

router.get('/current',auth,(req,res)=>{res.send(req.user)})



module.exports=router