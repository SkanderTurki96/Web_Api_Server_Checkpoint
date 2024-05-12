const { Register, GetOne, DeleteUser, UpdateUser, Login, IsAuth, GetAll } = require("../controllers/user");
const express= require('express');

const router = express.Router();

router.post('/Register', Register);
router.get('/GetOne/:id',GetOne);
router.delete('/Delete/:id',DeleteUser);
router.put('/UpdateUser',UpdateUser);
router.post('/Login' , Login);
router.get('/current' , IsAuth);
router.get('/GetAll' , GetAll)

module.exports = router;