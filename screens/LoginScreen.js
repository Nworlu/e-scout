import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Input from '../components/Input'
import PrimaryButton from '../components/PrimaryButton'
import FlatButton from '../components/FlatButton'

const LoginScreen = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Log in'
        })
    },[])
    
  return (
    <View style={styles.root}>
      <View>
        <Input label={'Username'} textConfig={{

        }} />
        <Input label={'Password'} textConfig={{

        }} />
        <FlatButton text={{textAlign:'right'}} style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
            Forgot password?
        </FlatButton>
        <PrimaryButton style={{width: '100%', marginHorizontal: 0, marginTop: 5,height:60}}>
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