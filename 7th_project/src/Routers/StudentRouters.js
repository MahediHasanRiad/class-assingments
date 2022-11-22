const router = require('express').Router()
const verifyToken = require('../Middlewares/verify')
const {
    studentRegister,
    logInStudent,
    UpdatePassword,
    openProfile,
    updateProfile
} =require('../Controllers/StudentController')

// student profile
router.post('/', studentRegister)
router.get('/login', logInStudent)
router.post('/updatePassword', verifyToken, UpdatePassword)
router.get('/profile', verifyToken, openProfile)
router.post('/update', verifyToken, updateProfile)


router.get('*', (req, res) => {
    res.send('try another path')
})

module.exports = router