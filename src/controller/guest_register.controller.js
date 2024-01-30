import { createToken } from "../libs/jwt.js";


export const register = async (req, res)=>{
    const {guestname} = req.body;
    const guestList = ["patricia", "Josue", "Clodo"];
    if(!guestList.includes(guestname)) {
        return res.status(400).json("This is not a guest name")
    }
    const token = createToken({name: guestname})
    res.cookie('token', token)
    return res.json({isRegistered: true, guestname});
}