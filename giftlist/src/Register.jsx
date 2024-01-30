import { useState } from "react"
import { useRegistered } from "./context/RegisterContex";
import { useNavigate } from "react-router-dom";

export function Register(){
    const [guestName, setGuestName] = useState("");
    const {validateGuest, error, auth} = useRegistered();
    const navigateTo = useNavigate()
    if(auth) navigateTo('/giftlist')

    return (
        <div className="container">
            <h1>Lista de regalos de boda de<br />Ricardo & Nicole</h1>
            <div>
                <p>
                    {error && (
                        <span>{error}</span>
                    )}
                </p>
                <form onSubmit={e=>{e.preventDefault(); validateGuest(guestName)}}>
                    <label htmlFor="guestname">Nombre</label>
                    <input name="guestname" className="text-input" type="text" onChange={e=> setGuestName(e.target.value)} value={guestName} />
                    <button className="Login-btn">Aceptar</button>
                </form>
            </div>
        </div>
    )
}