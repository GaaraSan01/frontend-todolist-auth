import axios from "axios";
import { parseCookies } from 'nookies';

const {'todo-token': token} = parseCookies()

const baseUrl = axios.create({
    baseURL:'https://backend-todolist-mgb1.onrender.com/'
});

if(token){
    baseUrl.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export default baseUrl