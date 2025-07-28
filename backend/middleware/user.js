const jwt = require("jsonwebtoken");

function usermiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization token missing or malformed" });
        }

        const token = authHeader.split(" ")[1]; 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_USER);

        req.userId = decoded.id;
        next();
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        res.status(403).json({ message: "Invalid or expired token" });
    }
}

module.exports = {
    usermiddleware
};
