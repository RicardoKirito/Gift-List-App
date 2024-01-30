import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config.js";

export const authRequired = (req, res, next)=>{
    const {token} = req;
    if(!token) return res.status(401).json(["Not Authorized"])
    jwt.verify(token, JWT_SECRET, (err, registered)=>{
        if(err) return res.status(401).json(['Not Authorized'])
        req.registered = registered;
        next()
    })
}   