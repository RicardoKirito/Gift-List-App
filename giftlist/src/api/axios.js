import axios from "axios";


const ax = axios.create({
    baseURL: "http://localhost:4040/api",
    withCredentials: true
})
export default ax;