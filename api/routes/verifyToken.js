const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    // console.log(req.headers.token)
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You're not authenticated!");
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isPublisher){
            next();
        }
        else{
            res.status(403).json("You are not allowed to do that!");
            return false;
        }
    })
}

const verifyTokenAndPublisher = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isPublisher){
            next();
        }
        else{
            res.status(403).json("You are not allowed to do that!");
        }
    })
}


module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndPublisher};