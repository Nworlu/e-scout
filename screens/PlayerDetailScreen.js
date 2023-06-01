import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import IconButton from '../components/IconButton'
const api = 'https://e-scout.onrender.com'

const PlayerDetailScreen = ({ route }) => {
    const playId = route.params.playerId
    const authCtx = useContext(AuthContext)
    const [player, setPlayer] = useState([])
    const token = authCtx.token
    useEffect(() => {
        async function getPlayerDetail() {
            try {
                const response = await axios.get(`${api}player/${playId}`, {
                    headers: {
                        // Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                })
                console.log(response.data.data)
            } catch (error) {
                Alert.alert(error.message, 'Please Check your network settings')
                console.log(error.message)
            }
        }
        getPlayerDetail()
    }, [token])

    console.log(typeof playId)
    return (
        <View style={{ flex: 1, backgroundColor: 'white' , paddingHorizontal: 15}}>
            <ScrollView style={{flex:1}}>

            <View>
                <View style={{width: '100%', borderWidth:1, height: 400, marginVertical: 10}}>
                    <Image />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                    <Text style={{fontSize: 19, fontWeight: '900'}}>Lionel Messi</Text>
                    <IconButton icon={'star'} color={'green'} size={40} />
                </View>
                <View>
                    <Image />
                    <Text style={{fontSize: 15, fontWeight: '900'}}>Argentina</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%'}}>
            <View >
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>team name</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>Paris Saint-Germain</Text>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>preferred_foot</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>Left</Text>
                </View>
            </View>
            <View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>height</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>169</Text>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>preferred_foot</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>Left</Text>
                </View>
            </View>
            <View>
                <View style={{marginVertical: 10}} >
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>jersey_number</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>30</Text>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>proposed_market_value</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>49000000</Text>
                </View>
            </View>
            <View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>date_of_birth_timestamp</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>1987-06-24T00:00:00+00:00</Text>
                </View>
                <View style={{marginVertical: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '900',textTransform:'capitalize', paddingBottom: 5}}>proposed_market_value</Text>
                    <Text style={{fontSize: 15, fontWeight: '500',}}>49000000</Text>
                </View>
            </View>

            </View>
            </ScrollView>

        </View>
    )
}

export default PlayerDetailScreen

const styles = StyleSheet.create({})

