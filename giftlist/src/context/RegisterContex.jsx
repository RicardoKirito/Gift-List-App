import { createContext, useContext, useState } from "react";
import { ValidateRegister } from "../api/registered";

export const RegisteredContext = createContext();
export const useRegistered = ()=>{
    const context = useContext(RegisteredContext);
    if(!context) throw new Error("useRegistered must be used within an registered Provider");
    return context;
}

export const RegisteredProvider = ({children})=>{
    const [guestname, setGuestname] = useState("");
    const [auth, setAuth] = useState(false);
    const [error, setError] = useState("");
    const validateGuest = async (guest, code)=>{
        setError("");
        setAuth(false)
        try{
            const res = await ValidateRegister({
                guestname: guest,
                code
            })
            setAuth(res.data.isRegistered);
            setGuestname(res.data.guestname)
        }catch(err){
            setError(err.response.data)
            
        }
    }
    return(
        <RegisteredContext.Provider value={{
            validateGuest,
            error,
            guestname,
            auth
        }}>
            {children}
        </RegisteredContext.Provider>
    ) 
}

