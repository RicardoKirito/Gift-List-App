import axios from "./axios.js";

export const getAllGiftRequest= async ()=> await axios.get("/gift");
export const getGiftRequest= async id=> await axios.get(`/gift/${id}`);
export const AddGiftRequest= async data=> await axios.post(`/gift`, data);
export const updateGiftRequest = async (data, id)=> await axios.put(`/gift/${id}`, data);
export const deleteGiftRequest= async id=> await axios.delete(`/gift/${id}`);
export const selectGiftRequest= async (id, data)=> await axios.post(`/gift-select/${id}`, data);
export const deselectGiftRequest= async (id, data)=> await axios.post(`/gift-deselect/${id}`, data);