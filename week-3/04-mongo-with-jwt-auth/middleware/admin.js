const { Admin } = require('../db/index')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        Admin.find(
            {
                Authorization:req.header.Authorization,
            }
        ).then((user)=>{
            if(user){next();}
        })
    } catch (error) {
        res.json({
            message:"not a valid admin or something wrong in your token",
            error:error,
        })
    }
}
    
module.exports = adminMiddleware;