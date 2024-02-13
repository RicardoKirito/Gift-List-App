import axios from "axios";


const ax = axios.create({
    baseURL: "https://gift-list-app.onrender.com",
    withCredentials: true
})
export default ax;