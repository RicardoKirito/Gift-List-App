import { useEffect, useState } from "react"
import { useRegistered } from "./context/RegisterContex";
import { useNavigate } from "react-router-dom";

export function Register(){
    const [guestName, setGuestName] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const {validateGuest, error, auth} = useRegistered();
    const navigateTo = useNavigate()
    if(auth) navigateTo('/giftlist')

    useEffect(()=>{}, [loading])

    return (
        <div className="container">
            <div className="greet">
                <h1>Lista de Regalos</h1>
                <h3>RICARDO & YADHIRA</h3> 
                <span>Unidos por un amor ilimitados</span>                   

            </div>
                
                <div className="register-container">

                    <form onSubmit={e=>{e.preventDefault(); setLoading(true); validateGuest(guestName, code); setLoading(false)}}>
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

                        {!loading &&(<button className="Login-btn">Aceptar</button>)}
                       {loading &&(<div style={{width:"10%"}}>
                         <div className="loader"></div>
                        </div>
                       )}
                    </form>
                </div>
        </div>
    )
}