const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    new Admin({username: req.body.username, password: req.body.password}).save();
    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    new Course({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
}).save()
   res.json({
    message: 'course created successfully'
   })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course
        .find()
        .then(courses => {
            res.json(courses);
        })
});

module.exports = router;