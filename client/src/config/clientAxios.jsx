import axios from 'axios'
export const clientAxios = axios.create({
    //baseURL : `${window.env.URL_BACK}`  //.acceder al .env en react
    baseURL : "http://localhost:4000/api" 
})