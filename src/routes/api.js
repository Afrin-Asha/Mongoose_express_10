
const express = require('express');
const router = express.Router();

// const StudentController = require('../controllers/StudentController');
const StudentsController = require('../controllers/StudentsController');
const JWTPractice = require('../controllers/JWTPractice');

//mongooose 
// router.post("/InsertStudent",StudentController.InsertStudent)
// router.get("/ReadStudents",StudentController.ReadStudents)
// router.get("/ReadStudentsByID/:id",StudentController.ReadStudentsByID)
// router.get("/DeleteStudent/:id",StudentController.DeleteStudent)
// router.post("/UpdateStudents/:id",StudentController.UpdateStudents)
///
router.post("/InsertStudent",StudentsController.InsertStudent)
router.get("/ReadStudents",StudentsController.ReadStudents)
// router.get("/ReadStudentsByID/:id",StudentsController.ReadStudentsByID)
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent)
router.post("/UpdateStudents/:id",StudentsController.UpdateStudents)


//create-decode jwt token Practices
router.get("/CreateToken",JWTPractice.CreateToken);

router.get("/DecodeToken",JWTPractice.DecodeToken);


module.exports = router;
