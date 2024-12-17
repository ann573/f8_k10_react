import axios from "axios";

export const instance = axios.create({
    
    baseURL: "http://localhost:3000",
    // baseURL: "https://json-server-4ogm.onrender.com",
    headers: {
        "Content-Type": "application/json"
    }
})

export default instance