const { Signup,Login,Logout } = require("../controller/AuthController");
const router = require("express").Router();
const {userVerification} =require("../middleware/AuthMiddleware");
router.post("/signup", Signup);
router.post('/login', Login);
router.post("/logout", Logout);
router.post('/',userVerification);
module.exports = router;