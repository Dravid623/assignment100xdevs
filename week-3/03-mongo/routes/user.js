const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    new User({
        username: req.body.username,
        password: req.body.password
    }).save();
    res.json({
        message: 'User created successfully'
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course
        .find()
        .then(courses => {
            res.json(courses);
        })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
     Course
        .findById(req.params.courseId)
        .then(courses => {
            res.json(courses);
        })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router;
