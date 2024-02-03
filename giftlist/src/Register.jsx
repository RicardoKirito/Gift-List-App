import { useState } from "react"
import { useRegistered } from "./context/RegisterContex";
import { useNavigate } from "react-router-dom";

export function Register(){
    const [guestName, setGuestName] = useState("");
    const [code, setCode] = useState("");
    const {validateGuest, error, auth} = useRegistered();
    const navigateTo = useNavigate()
    if(auth) navigateTo('/giftlist')

    return (
        <div className="container">
            <div className="greet">
                <h1>Lista de Regalos</h1>
                <h3>RICARDO & YADHIRA</h3> 
                <span>Unidos por un amor ilimitados</span>                   

            </div>
                
                <div className="register-container">

                    <form onSubmit={e=>{e.preventDefault(); validateGuest(guestName, code)}}>
                        <p>
                            {error && (
                                <span>{error}</span>
                            )}
                        </p>
                        <div>
                         <label htmlFor="guestname">Nombre</label> <br />
                            <input name="guestname" className="text-input" type="text" placeholder="Escribe tu nombre" onChange={e=> setGuestName(e.target.value)} value={guestName} />
                        </div>
                        <div>
                         <label htmlFor="guestname">Codigo</label> <br />
                            <input name="code" className="text-input" type="password" placeholder="****" onChange={e=> setCode(e.target.value)} value={code} />
                        </div>
                        <button className="Login-btn">Aceptar</button>
                        <div className="bg-blur"></div>
                    </form>
                </div>
        </div>
    )
}