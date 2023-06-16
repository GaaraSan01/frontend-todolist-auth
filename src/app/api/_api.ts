import axios from "axios";
import { parseCookies } from 'nookies';

const {'todo-token': token} = parseCookies()

const baseUrl = axios.create({
    baseURL:'http://localhost:3001'
});

if(token){
    baseUrl.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default baseUrl