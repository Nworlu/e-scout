import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import IconButton from '../components/IconButton'

const BottomTab = createBottomTabNavigator()

const AppStack = () => {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen name='HomeScreen' component={HomeScreen} options={{
            tabBarIcon:({color,size,focused})=><IconButton icon={'home'} color={color} size={size}  />,
            tabBarLabel: 'Feed'
        }} />
    </BottomTab.Navigator>
  )
}

export default AppStack