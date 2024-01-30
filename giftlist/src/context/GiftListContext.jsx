import { createContext, useContext } from "react";
import { deselectGiftRequest, getAllGiftRequest, selectGiftRequest } from "../api/giftlist";

export const GiftListContext = createContext();

export const useGiftList = ()=>{
    const context = useContext(GiftListContext)
    if(!context) throw Error("this is not a context for gift list")
    return context
}

export const GiftListProvider= ({children})=>{
    const getAllGift = async ()=>{
        const res= await getAllGiftRequest().catch(err=>{
            console.log(err)
        });
        return res
    }
    const selectGift = async (id, data)=>{
        const res = await selectGiftRequest(id, data).catch(err=>{
            console.log(err)
        });
        if(res.status===200) return true;
        return false; 

    }
    const deselectGift = async (id, data)=>{
        const res = await deselectGiftRequest(id, data).catch(err=>{
            console.log(err)
        })
        if(res.status===200) return true;
        return false;
    }
    return (
        <GiftListContext.Provider value={
            {
                getAllGift,
                selectGift,
                deselectGift

            }
            
        }>
            {children}
        </GiftListContext.Provider>
    )
}