import { StyleSheet, Text, View,KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import FlatButton from '../components/FlatButton'
const SignupScreen = ({navigation}) => {
    const [date, setDate] = useState('09-10-2021');
    
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Register'
        })
    },[])
 
  return (
    <ScrollView style={styles.rootContainer}>
    <View style={styles.root}>
        <KeyboardAvoidingView behavior='position' >
      <View>
        <Input label={'FullName'} textConfig={{

        }} />
        <Input label={'Email'} textConfig={{

        }} />
        <Input label={'Email'} textConfig={{

        }} />
        <Input label={'Password'} textConfig={{

        }} />
        <Text>Birth Date</Text>
           
        <FlatButton text={{textAlign:'right'}} style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Forgot password?
        </FlatButton>
        <PrimaryButton style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Log in
        </PrimaryButton>
        <FlatButton style={{width: '100%', marginHorizontal: 0, marginTop: 10,height:60}}>
            New user? Register
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