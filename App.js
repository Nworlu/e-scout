import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './navigation/AppNav';
import AuthContextProvider from './context/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
const api = 'https://e-scout.onrender.com'
export default function App() {
  useEffect(()=>{
    async function ping(){
      try {
        const response = await axios.get(`${api}`)
        console.log(response.data.message)

      } catch (error) {
        console.log(error.message, 'ping')
      }
    }
    ping()
  },[])
  return (
    <AuthContextProvider>
      <AppNav/>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({

});
