import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import IconButton from '../components/IconButton'
import ExploreScreen from '../screens/ExploreScreen'
import FilterScreen from '../screens/FilterScreen'
import PlayerListsScreen from '../screens/PlayerListsScreen'
import PlayerDetailScreen from '../screens/PlayerDetailScreen'
import SingleNewsDetailsScreen from '../screens/SingleNewsDetailsScreen'

const BottomTab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const StackNavigation =()=>{
    return (
        <BottomTab.Navigator>
        <BottomTab.Screen name='HomeScreen' component={HomeScreen} options={{
            tabBarIcon:({color,size})=><IconButton icon={'home'} color={color} size={size}  />,
            tabBarLabel: 'Feed'
        }} />
        <BottomTab.Screen name='ExploreScreen' component={ExploreScreen} options={{
            tabBarIcon:({color,size})=><IconButton icon={'md-compass'} color={color} size={size}  />,
            tabBarLabel: 'Explore',
            headerShadowVisible: false
        }} />
        {/* <BottomTab.Screen name='StackNavigation' component={StackNavigation} options={{
            headerShadowVisible: false,
            tabBarItemStyle:{
                display: 'none'
            },

        }} /> */}
    </BottomTab.Navigator>

    )
}

const AppStack = () => {

  return (
    <Stack.Navigator>
    <Stack.Screen name='StackNavigation' component={StackNavigation} options={{
        headerShown: false
    }} />
    <Stack.Screen name='FilterScreen' component={FilterScreen} options={{
        presentation: 'modal',
        contentStyle:{
            backgroundColor: 'white',
        },
        headerShadowVisible: false
    }}/>
    <Stack.Screen name='PlayerListsScreen' component={PlayerListsScreen} />
    <Stack.Screen name='PlayerDetailScreen' component={PlayerDetailScreen} />
    <Stack.Screen name='SingleNewsDetailsScreen' component={SingleNewsDetailsScreen} />
</Stack.Navigator>
  )
}

export default AppStack
