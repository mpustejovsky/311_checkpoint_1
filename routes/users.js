const express = require('express')


const router = express.Router()
const UsersController = (require('../controllers/user.js'))

router.get('/', UsersController.getAllUsers);
router.get("/:id", UsersController.getUsersId);
router.post('/', UsersController.postUsers);
router.delete('/:id', UsersController.deleteUsers);
router.put('/:id', UsersController.updateUsers)


module.exports = router