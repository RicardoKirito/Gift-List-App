import { useEffect, useState } from "react";
import { Categories } from "./components/Categories.component.jsx"
import { Gift } from "./components/Gift.component.jsx";
import { useGiftList } from "./context/GiftListContext.jsx";
import { useRegistered } from "./context/RegisterContex";
import { useNavigate } from "react-router-dom";
import { Difuser } from "./components/Difuser.component.jsx";

export function GiftList(){
      
    const [giftList, setGiftList] = useState([])
    const [giftCar, setGiftCar] = useState([])
    const [isCar, setIsCar] = useState(false);
    const [selected, setSelected] = useState(null);
    const [imagePosition, setImagePosition] = useState(0);
    const [load, setLoad] = useState(0);
    const [modalImg, setModalImg] = useState("");


    const {auth, guestname} = useRegistered();
    const {getAllGift} = useGiftList();
    const navigateTo = useNavigate();

    if(!auth) navigateTo("/register")
    function getGiftList(){
        getAllGift().then(res=>{
            res.status === 200? setGiftList(res.data): Promise.reject(res)
        }).catch(err=>{
            console.error(err);
        });

    } 
    if(giftList.length===0 && load!==0){
        setLoad(0);
        getGiftList()
    }
    function refresh(){
        const Car = [];
        giftList.forEach(gift=>{
            const result = gift.pickedamount.filter(gift=> gift.guestname===guestname);
            if(result.length>0) Car.push(gift);  
        });
        setGiftCar(Car);
    }
    useEffect(()=>refresh(),[giftList])
    useEffect(()=>{
        if(isCar){
            refresh()

        }else{
            getGiftList();
        }
    }, [isCar])
    useEffect(()=>{ setImagePosition(0) }, [selected])
    return (
        <div >
            <h1 className="h1">HOOOLA {guestname}!</h1>
            <div className="giftlist-container">
                <div className="gift-car">
                    <div className="btn-giftcar" onClick={e=>setIsCar(true)}>Carrito de regalos</div>
                </div>
                <div className="giftlist">
                    <h3 onClick={e=>{getGiftList(); setIsCar(false)}}>Lista de regalos</h3>
                    <div className="gl">
                        {(!isCar? (giftList.map((gift, i) => (
                            gift.remain>0 &&(
                                <Gift key={i} gift={gift} guestname={guestname} refresh ={getGiftList} isCar = {isCar} selected={setSelected}/>
                            )))):
                            (giftCar.length>0? 
                                giftCar.map((gift, i) => (<Gift key={i} gift={gift} guestname={guestname} refresh ={getGiftList} isCar = {isCar} selected={setSelected} />))
                                : <h4>No has añido nada en el carro</h4>    
                            )
                        )
                        }
                    </div>
                    <Difuser background='linear-gradient(0deg, rgb(107, 153, 186) 25%,rgb(107, 153, 186, 0.6) 73%, rgb(107, 153, 186, 0) 100%)' height="60px" bottom="0px"/>
                </div>
            </div>
            {selected && (
                
                <div className="gift-Detailes">
                    <div className="img-container">
                        <img src={selected.picturesLink[imagePosition]} alt="" onClick={e=>setModalImg(selected.picturesLink[imagePosition])}/>
                        {selected.picturesLink[1] &&(
                         <div>
                             <button className="back" onClick={e=>{imagePosition===selected.picturesLink.length-1?setImagePosition(0): setImagePosition(imagePosition+1)}}>{"<"}</button>
                             <button className="foward" onClick={e=>{imagePosition!=0?setImagePosition(imagePosition-1):setImagePosition(selected.picturesLink.length-1)}}>{">"}</button>
                         </div>   
                        )}
                    </div>
                    <div className="info-container">
                        <h2>{selected.name}</h2>
                        <h3>Precio: RD${selected.priceRange[0]}{selected.priceRange[1]?`-${selected.priceRange[1]}`:""}</h3>
                    </div>
                    <div className="over">
                        <div>
                            <div  className="card">
                                <h5>Descripción</h5>
                                <p>{selected.Description}</p>
                            </div>
                            <div className="card">
                                <h5>Lugares donde comprarlo:</h5>
                                <br />
                                <ol>
                                    {selected.locations.map((loc, i)=> (
                                        <li key={i}><a href={loc} target="blanck">{loc}</a></li>
                                        ))}
                                </ol>
                            </div>
                        </div>
                        <Difuser background='linear-gradient(0deg, rgb(255,255,255) 25%,rgb(255,255,255, 0.6) 73%, rgb(255,255,255, 0) 100%)' height="30px" bottom="0px"/>
                    </div>
                </div>
            )}
            {modalImg && (
                <div className="modal">
                    <div className="modal-img">
                        
                        <img src={modalImg} alt="" />
                    </div>
                    <h1 className="close-modal" title="Close" onClick={e=>{
                        e.target.parentElement.style.opacity = "0"
                        setTimeout(()=>setModalImg(null), 300);
                        }}>
                    &#x2716;
                    </h1>
                </div>
            )}
        </div>
    )
}