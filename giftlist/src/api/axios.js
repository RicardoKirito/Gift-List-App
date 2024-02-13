import axios from "axios";


const ax = axios.create({
    baseURL: "https://gift-list-app.onrender.com/api",
    withCredentials: true
})
export default ax;