import { createToken } from "../libs/jwt.js";


export const register = async (req, res)=>{
    const {guestname, code} = req.body;
    
    const guestList = [
        'thelma',
        'doris',
        'samuel',
        'samil',
        'tiaclaudia',
        'mariel',
        'jenifer',
        'gerandry',
        'tianani',
        'tioivan',
        'michelle',
        'clodo',
        'katherine',
        'camila',
        'jenipher',
        'ailyn',
        'paula',
        'josue',
        'eneroliza',
        'ivan',
        'patricia',
        'gabby',
        'lizzie',
        'margarita',
        'aniel',
        'gilda',
        'deivi',
        'juliana',
        'rachel',
        'brian',
        'randolph'
      ];
    const guestCode = [
        '2387', '6192', '7843', '4901', '3526', '6874', '9258', '1634',
        '7419', '5082', '2976', '6048', '8315', '4792', '5723', '3967',
        '8102', '2541', '1367', '9482', '7035', '1852', '9674', '3201',
        '5749', '8426', '1693', '7034', '2856', '4962', '7183', '9632'
      ]
    if(!guestList.includes(guestname.trim().toLowerCase())) {
        return res.status(400).json("Este no pertenece a ningun invitado")
    }
   
    if(!(guestCode[guestList.findIndex(d=> d==guestname.trim().toLowerCase())]===code)){
        return res.status(400).json("Codigo incorrecto")
    }
    const token = createToken({name: guestname.toLowerCase()})
    res.cookie('token', token)
    return res.json({isRegistered: true, guestname: guestname.toLowerCase()});
}