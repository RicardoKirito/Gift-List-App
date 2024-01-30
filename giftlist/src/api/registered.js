import axios from './axios.js'

export const ValidateRegister = async data => await axios.post("/register", data);