import { useState } from "react";
import { useGiftList } from "../context/GiftListContext";
import { Capitalize } from "../libs/capitalize"

export function Gift(props){
    const {gift, guestname, refresh, isCar, selected} = props
    const {selectGift, deselectGift} = useGiftList();
    const {remain, priceRange, name, picked, _id, picturesLink, pickedamount} = gift;
    const isSelected = pickedamount.find(guest=> guest.guestname===guestname);
    const [amount, setAmount] = useState(1);

    const open = e=>{
        if(!e.target.className.includes("btn")){
            selected(gift);
        }
    }

    if(isCar){
        return(
            <div className={"gift-container"} data-id = {_id} onClick={e=>open(e)}>
            <div className="circle">
                <img src={picturesLink[0]} width={60} height={60} alt="" />
            </div>
            <div className="gift-info">
                <h2>{((isSelected?.amount>1) &&(isSelected.amount))} {Capitalize(name)}</h2>
                <p>Precios: ${priceRange[0]}{priceRange[1]?`-${priceRange[1]}`:""}</p>    
            </div>
           
                <div className="btn-delete" onClick={async e=> {
                    if(e.target.className === "btn-delete"){
                        await deselectGift(_id, {guestname, amount})
                        refresh();
                    }
                    e.stopPropagation()
                }}>Eliminar
                {(isSelected?.amount>1) &&(<input className="input-amount" type="number" min={1} value={amount} max={isSelected?.amount} onChange={e=> setAmount(e.target.value)}/>)}
                </div>
        </div>
        )
    }
    return(
        <div className={"gift-container"} data-id = {_id} onClick={e=>open(e)}>
            <div className="circle">
                <img src={picturesLink[0]} width={60} height={60} alt="" />
            </div>
            <div className="gift-info">
                <h2>{Capitalize(name)}</h2>
                <p>Precios: ${priceRange[0]}{priceRange[1]?`-${priceRange[1]}`:""}</p>
                {remain>1 &&(<p>Quedan: {remain}</p>)}
                
            </div>
            <div className="btn-Add" onClick={async e=> {
                if(e.target.className === "btn-Add"){
                    await selectGift(_id, {guestname, amount})
                    refresh();
                }
                e.stopPropagation()
            }
        }>Agregar 
         {((remain>1)) &&(<input type="number" className="input-amount" min={1} value={amount} max={remain} onChange={e=> setAmount(e.target.value)}/>)}
        </div>
        </div>
        )
}