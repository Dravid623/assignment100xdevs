const {User} = require('../db/index')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    if(User.find({username:req.header.username, password: req.header.password})){
        next();
    } else {
        res.staus(404).json({message: "Not a valid user"})
    }
}

module.exports = userMiddleware;