const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const cityController = require('../controllers/cityController')

router.get('/api/user', userController.index)
router.post('/api/user/', userController.create)
router.get('/api/user/:userId', userController.show)
router.patch('/api/user/:userId', userController.update)
router.delete('/api/user/:userId', userController.delete)

