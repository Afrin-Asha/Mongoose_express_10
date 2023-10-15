
const express = require('express');
const router = express.Router();

// const StudentController = require('../controllers/StudentController');
const StudentsController = require('../controllers/StudentsController');
const JWTPractice = require('../controllers/JWTPractice');
const WorksController = require('../controllers/WorksController');
const AuthVerifyMiddleware=require('../middleware/AuthVerifyMiddleware');


//mongooose 
// router.post("/InsertStudent",StudentController.InsertStudent)
// router.get("/ReadStudents",StudentController.ReadStudents)
// router.get("/ReadStudentsByID/:id",StudentController.ReadStudentsByID)
// router.get("/DeleteStudent/:id",StudentController.DeleteStudent)
// router.post("/UpdateStudents/:id",StudentController.UpdateStudents)
///
router.post("/registration",StudentsController.registration)
router.post("/login",StudentsController.login)

router.get("/ReadStudents",StudentsController.ReadStudents)
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent)
router.post("/UpdateStudents/:id",StudentsController.UpdateStudents)

//For Student Works
router.post("/CreateWork",AuthVerifyMiddleware,WorksController.CreateWork)
router.get("/SelectWork",AuthVerifyMiddleware,WorksController.SelectWork)
router.post("/UpdateWork",AuthVerifyMiddleware,WorksController.UpdateWork)
router.get("/DeleteWork",AuthVerifyMiddleware,WorksController.DeleteWork)


//create-decode jwt token Practices
// router.get("/CreateToken",JWTPractice.CreateToken);

// router.get("/DecodeToken",JWTPractice.DecodeToken);


module.exports = router;
