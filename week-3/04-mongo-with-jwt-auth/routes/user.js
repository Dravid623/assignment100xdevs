const { Router } = require("express");
const jwt = require('jsonwebtoken');
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const { jwtPassword } = require("../../02-jwt");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try {
        new User({
            username: req.body.username,
            password: req.body.password,
            Authorization: jwt.sign(
                {
                    username: req.body.username,
                    password: req.body.password,
                },
                jwtPassword
            ),
        }).save();
        res.json({ message: "user created successfully" });
    } catch (error) {
        res.json({
            message: "error while crating admin",
            error: error,
        });
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    try {
        res.json({
            message: "login successful",
            Authorization: User.find({
                username: req.body.username,
                password: req.body.password,
            }).Authorization,
        });
    } catch (error) {
        res.json({
            message: "error while login",
            error: error,
        });
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
     try {
        res.json(
            Course.find({
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
            })
        )
    } catch (error) {
        res.json({
            message:"error while serchig courese in db",
            error:error,
        })
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
     try {
        res.json(
            Course.findById({
                id:req.params.id
            })
        )
    } catch (error) {
        res.json({
            message:"error while serchig courese in db using id",
            error:error,
        })
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router;
