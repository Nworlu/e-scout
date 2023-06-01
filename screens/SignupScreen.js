import { StyleSheet, Text, View,KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import FlatButton from '../components/FlatButton'
import LoadingOverlay from '../components/LoadingOverlay'
import { register } from '../api/baseUrl'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
const api = 'https://e-scout.onrender.com'
const SignupScreen = ({navigation}) => {
    const [date, setDate] = useState('09-10-2021');
    const [enteredName, setEnteredName] = useState("")
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const authCtx = useContext(AuthContext)
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Register'
        })
    },[])

    useEffect(()=>{
        async function ping(){
          try {
            const response = await axios.get(`${api}`)
            console.log(response.data.message)

          } catch (error) {
            console.log(error)
          }
        }
        ping()
      },[])
    function updateInputHandler(inputType, enteredValue){
        switch (inputType) {
            case 'enteredName':
                setEnteredName(enteredValue)
                break;
            case 'enteredEmail':
                setEnteredEmail(enteredValue)
                break;
            case 'enteredPassword':
                setEnteredPassword(enteredValue)
                break;
        }
    }
    function inputValidation(error){
        let name= enteredName !== ""
        let email = enteredEmail.includes('@')
        let password = enteredPassword >6

        Alert.alert('Failed Authentication',  !name
        ? "Please provide your details"
        : !email
        ? "Please provide a valid email"
        : !password
        ? "Your password must be more than 6 "
        : error
         )
    }
    const data = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      };

    async function registerHandler(){
        setIsAuthenticating(true)
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
        //   if(response.data.token){
        //     navigation.replac('HomeScreen')
        //   }
          console.log(response.data.token);
          console.log(response.data.user);
          authCtx.setUserData(response.data.user)
          if(authCtx.userData){
            navigation.replace('LoginScreen')
          }
      } catch (error) {
        // inputValidation()
          Alert.alert('Failed Authentication',error.message)
          console.log(error.response.data.error)
      }
      setIsAuthenticating(false)
    }

    if(isAuthenticating){
        return <LoadingOverlay message={'Creating user......'}/>
    }

  return (
    <ScrollView style={styles.rootContainer}>
    <View style={styles.root}>
        <KeyboardAvoidingView behavior='position' >
      <View>
        <Input label={'FullName'} textConfig={{
        inputMode: 'text',
        placeholder: 'Full Name',
        keyboardType: 'default',
        value: enteredName,
        onChangeText: updateInputHandler.bind(this,'enteredName')
        }} />
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
        {/* <Text>Birth Date</Text> */}

        <FlatButton text={{textAlign:'right'}} style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Forgot password?
        </FlatButton>
        <PrimaryButton onPress={registerHandler} style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Register
        </PrimaryButton>
        <FlatButton style={{width: '100%', marginHorizontal: 0, marginTop: 10,height:60}}>
            Already a user? Login
        </FlatButton>
      </View>
        </KeyboardAvoidingView>

    </View>
    </ScrollView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        marginHorizontal: 20
    },
    rootContainer:{
        flex:1,
    },
    datePickerStyle: {
        width: 230,
    },
})
