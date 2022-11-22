const router = require('express').Router()
const verifyToken = require('../Middlewares/verify')
const {
    studentRegister,
    logInStudent,
    UpdatePassword,
    openProfile,
    updateProfile
} =require('../Controllers/StudentController')

const {
    createTask,
    showAllTask,
    updateTask,
    removeTask,
    filterBySubject,
    filterByDate
} = require('../Controllers/s_DailyTaskController')

// student profile
router.post('/', studentRegister)
router.get('/login', logInStudent)
router.post('/updatePassword', verifyToken, UpdatePassword)
router.get('/profile', verifyToken, openProfile)
router.post('/update', verifyToken, updateProfile)

// student task
router.post('/tasks', verifyToken, createTask)
router.get('/tasks', verifyToken, showAllTask)
router.post('/tasks/:id', verifyToken, updateTask)
router.get('/tasks/delete/:id', verifyToken, removeTask)
router.get('/tasks/subject', verifyToken, filterBySubject)
router.get('/tasks/date', verifyToken, filterByDate)


router.get('*', (req, res) => {
    res.send('try another path')
})

module.exports = router