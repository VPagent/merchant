import  axios  from "axios";
import { GoogleRes, RegBody, RegResponse, Shopify } from "../types/types";


export const getShopify = async (name:string):Promise<Shopify> => {
    const URL = `https://vast-basin-98801.herokuapp.com/shopify?name=${name}`
    const response = await axios.get(URL)
    return response.data
}

export const getGoogle = async ():Promise<GoogleRes> => {
    const URL = "https://vast-basin-98801.herokuapp.com/google"
    const response = await axios.get(URL)
    return response.data
}

export const register = async (body:RegBody):Promise<RegResponse> => {
    const URL = "https://vast-basin-98801.herokuapp.com/register"
    const response = await axios.post(URL, body)
    return response.data
}







