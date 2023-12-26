const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const { jwtPassword } = require("../../02-jwt");
// const jwtPassword = "dravid";

// Admin Routes
router.post("/signup", (req, res) => {
    // Implement admin signup logic
    try {
        new Admin({
            username: req.body.username,
            password: req.body.password,
            Authorization: jwt.sign(
                {
                    username: req.body.username,
                    password: req.body.password,
                },
                jwtPassword
            )
        }).save();
        res.json({ message: "Admin created successfully", });
    } catch (error) {
        res.json({
            message: "error while crating admin",
            error: error.message,
        });
    }
});

router.post("/signin", async(req, res) => {
    // Implement admin signup logic
    try {
        const token = await Admin.find({
                username: req.body.username,
                password: req.body.password,
            })
            console.log(token[0].Authorization)
        res.json({
            Authorization:token[0].Authorization,
            message: "login successful",
        });
    } catch (error) {
        res.json({
            message: "error while login",
            error: error.message,
        });
    }
});

router.post("/courses", adminMiddleware, (req, res) => {
    // Implement course creation logic
    try {
        new Course({
            id:req.body.id,
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
        }).save()
        .then(()=>{
            res.json({ message: "course created successfully"})
        })
    } catch (error) {
        res.json({
            message:"error while creating course",
            error:error,
        })
    }
});

router.get("/courses", adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    try {
        Course
        .find()
        .then(courses => {
            res.json(courses);
        })
    } catch (error) {
        res.json({
            message:"error while serchig courese in db",
            error:error.message,
        })
    }
});

module.exports = router;
