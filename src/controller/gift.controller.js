import Gift from "../model/gift.model.js"

export const getGiftAll = async(req, res)=>{
    const giftList = await Gift.find();
    res.status(200).json(giftList);
}
export const getGift = async (req, res)=>{
    const gift = await Gift.findById(req.params.id)
    res.status(200).json(gift)
}
export const selectGift = async (req, res)=>{

    const giftResult = await Gift.findById(req.params.id)
    
    if(giftResult.remain>=req.body.amount){

        giftResult.remain-= parseInt(req.body.amount);
        const guest = giftResult.pickedamount.find(guest=> guest.guestname===req.body.guestname )

        if(guest?.guestname===req.body.guestname){
            guest.amount += parseInt(req.body.amount);
        }else{
            giftResult.pickedamount.push({guestname: req.body.guestname, amount: req.body.amount})
        }
        if(giftResult.remain===0) giftResult.picked = true;
        await Gift.findByIdAndUpdate(req.params.id, giftResult)
        return res.status(200).json(giftResult)
    }        
    res.status(400).json("Wrong request")
}
export const deselectGift = async (req, res)=>{
    const giftResult = await Gift.findById(req.params.id)

    if(giftResult.amount>=req.body.amount){
        const guest = giftResult.pickedamount.find(guest=> guest.guestname===req.body.guestname)
        if(guest?.amount>= req.body.amount){
            guest.amount -= parseInt(req.body.amount)
            giftResult.remain += parseInt(req.body.amount)
            if(guest?.amount===0) giftResult.pickedamount.pop(guest);
        }
        if(giftResult.remain!=0) giftResult.picked = false;
        await Gift.findByIdAndUpdate(req.params.id, giftResult)
    }
    res.status(200).json(giftResult)
}
export const AddGift = async (req, res)=>{
    const gift = await Gift.create(req.body)
    res.status(200).json({message: gift})
}
export const updateGift = async(req, res)=>{
    await Gift.updateOne({_id: req.params.id}, req.body)
    res.status(200)
}
export const deleteGift = async (req, res) =>{
    await Gift.deleteOne({_id: req.params.id})
    return res.status(200)
}