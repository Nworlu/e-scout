import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import FlatButton from '../components/FlatButton'
import axios from "axios";
import LoadingOverlay from '../components/LoadingOverlay'
import { login } from '../api/baseUrl'
import { AuthContext } from '../context/AuthContext'
const api = 'https://e-scout.onrender.com'

const LoginScreen = ({navigation}) => {
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const authCtx = useContext(AuthContext)
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Log in'
        })
    },[])
    function updateInputHandler(inputType, enteredValue){
      switch (inputType) {
          case 'enteredEmail':
              setEnteredEmail(enteredValue)
              break;
          case 'enteredPassword':
              setEnteredPassword(enteredValue)
              break;
      }
  }
  const data = {
    email: enteredEmail,
    password: enteredPassword,
  };
  function inputValidation(error){
    let email = enteredEmail.includes('@')
    let password = enteredPassword >6

    Alert.alert('Failed Authentication',!email
    ? "Please provide a valid email"
    : !password
    ? "Your password must be more than 6 "
    : error
     )
}

async function loginHandler(){
    setIsAuthenticating(true)
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
      console.log(response);
      authCtx.setUserData(response.data.user)
      authCtx.authenicate(response.data.token)
      if(authCtx.token){
        navigation.replace('HomeScreen')
      }
  } catch (error) {
    // inputValidation()
      Alert.alert('Failed Authentication',error.message)
      console.log(error.message)
  }
  setIsAuthenticating(false)
}
  if(isAuthenticating){
    return <LoadingOverlay message={'Authenticating user......'}/>
}
  return (
    <View style={styles.root}>
      <View>
        <Input label={'Email'} textConfig={{
        inputMode: 'email',
        placeholder: 'Email',
        keyboardType: 'email-address',
        value: enteredEmail,
        onChangeText: updateInputHandler.bind(this,'enteredEmail')
        }} />
        <Input label={'Password'} textConfig={{
        inputMode: 'text',
        placeholder: 'Password',
        keyboardType: 'default',
        value: enteredPassword,
        onChangeText: updateInputHandler.bind(this,'enteredPassword'),
        secureTextEntry: true,
        }} />
        <FlatButton text={{textAlign:'right'}} style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Forgot password?
        </FlatButton>
        <PrimaryButton onPress={loginHandler} style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Log in
        </PrimaryButton>
        <FlatButton onPress={()=>navigation.navigate('SignupScreen')} style={{width: '100%', marginHorizontal: 0, marginTop: 10,height:60}}>
            New user? Register
        </FlatButton>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        marginHorizontal: 20
    }
})
