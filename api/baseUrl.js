import axios from "axios";
import { useEffect } from "react";
import { Alert } from "react-native";
const api = 'https://e-scout.onrender.com'

export const register = async function(data){
    try {
        const response = await axios.post(`${api}/auth/register`, JSON.stringify(data),{
            headers:{
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "https://e-scout.onrender.com", // replace with your own domain
            },
            mode: "cors",
            credentials: 'include',
          }
        )
        return response.data;

    } catch (error) {
        // Alert.alert('Failed Authentication',error.response)
        console.log(error, 'api')
    }
}
export const login = async function(data){
    try {
        const response = await axios.post(`${api}/auth/login`, JSON.stringify(data),{
            headers:{
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "https://e-scout.onrender.com", // replace with your own domain
            },
            mode: "cors",
            credentials: 'include',
          }
        )
        return response.data;

    } catch (error) {
        // Alert.alert('Failed Authentication',error.response)
        console.log(error, 'api')
    }
}


