const express = require('express');
const router = express.Router();
const { createStudent, updateStudentById, deleteStudentById, getStudent, getStudentById, getStudentByName, getStudentByEmail } = require('../controllers/students.controllers');



router.post('/create-student', createStudent);
router.put('/update-student', updateStudentById);
router.delete('/delete-student', deleteStudentById);
router.get('/get-student', getStudent);
router.get('/get-student/:id', getStudentById);
router.get('/get-student-name', getStudentByName);
router.get('/get-student-email', getStudentByEmail)



module.exports = router;