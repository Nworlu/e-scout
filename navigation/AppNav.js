import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'


const AppNav = () => {
  return (
    <NavigationContainer>
        {/* <AuthStack/> */}
        <AppStack/>
    </NavigationContainer>
  )
}

export default AppNav

const styles = StyleSheet.create({})