import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext'


const AppNav = () => {
  const authCtx =  useContext(AuthContext)

  return (
    <NavigationContainer>
      {authCtx.authenicated ?
        <AppStack/>
        :
        <AuthStack/>
        }
        {/* <AppStack/> */}
    </NavigationContainer>
  )
}

export default AppNav

const styles = StyleSheet.create({

})
