const {User} = require("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
 
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;  
    const password  = req.headers.password; 
    
    // if no signup is happen in the website it return always null
    User.findOne({
        username : username ,
        password : password 
    })
    .then(function(value){
        if (value){
            next();  // coontrol are reach various position to various place!
    
        }
        else{
            res.status(403).json({
    msg : "User doesnt exist "
            })
        }
    })
    }


module.exports = userMiddleware;