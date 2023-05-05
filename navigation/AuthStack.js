import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        contentStyle:{
            backgroundColor: 'white',
        },
        headerShadowVisible: false,
        headerTitleAlign:'center'
    }} >
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})