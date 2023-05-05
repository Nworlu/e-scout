import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

const HomeScreen = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: 'Feed'
        })
    },[])
    return (
    <View style={styles.root}>
        <Pressable style={({pressed})=> [pressed && styles.pressed, styles.footballContainer]}>
        <View style={styles.footballContainer}>
            <View style={styles.footCol}>
                <View style={styles.pena}>
                <Text>Penalities against</Text>
                <Text>2 months ago</Text>
                </View>
                <Text style={styles.title}>World Cup 2018 Russia</Text>
            </View>
            <View>
            <Image/>
            </View>
            <View>
                <Text></Text>
                <IconButton icon={'share-outline'} color={'grey'} size={30} />
            </View>
        </View>
        </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems: 'center'

    },
    footballContainer:{
        backgroundColor:'white',
        width: '100%',
        height:400,
    },
    footCol:{
        width: '100%'
    },
    pena:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    pressed:{
        opacity: 0.75
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold'
    }
})