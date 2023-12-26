const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    if(Admin.find({username:req.header.username, password: req.header.password})){
        next();
    } else {
        res.status(404).json({message: "Not a authorized admin"})
    }
}

module.exports = adminMiddleware;