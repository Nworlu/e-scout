import { StyleSheet, Text, TextInput, View, Image, Pressable, FlatList } from 'react-native'
import React, { useContext, useEffect,useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { Ionicons } from "@expo/vector-icons";

import IconButton from '../components/IconButton';
import { AuthContext } from '../context/AuthContext';
import FootballNewView from '../components/FootballNewView';
import PrimaryButton from '../components/PrimaryButton';
import LoadingOverlay from '../components/LoadingOverlay';
const api = 'https://e-scout.onrender.com'

const ExploreScreen = ({navigation}) => {
    const authCtx = useContext(AuthContext)
    const [mode, setMode] = useState('Hot')
    const [players, setPlayers] = useState([])
    const [randomPlayers, setRandomPlayers] = useState([])
    const [searchPlayer, setSearchPlayer] = useState('')
    const [searchedPlayer, setSearchedPlayer] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const token = authCtx.token
    const toggleMode = () => {
        setMode(mode === 'Hot' ? 'Random' : 'Hot');
        console.log(mode)
        if(mode === "Hot"){
            getHotPlayers()
        // } else if(mode === 'Random'){
        }
        getRandomPlayers()
      };

    useLayoutEffect(() => {
        navigation.setOptions({
          title: "Explore",
        });
      }, []);
      function filterHandler(){
        navigation.navigate('FilterScreen')
    }
    useEffect(()=>{
        if(mode === "Hot"){
            getHotPlayers()
        } else {
            getRandomPlayers()
        }
    },[token])
    async function getHotPlayers(){
        try {
            // const url = mode === 'Hot'? `${api}/players/hot` : `${api}players/random`
            const response = await axios.get(`${api}/players/hot`, {headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }})
            // console.log(response.data.data, 'Hot players')
            setPlayers(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    async function getRandomPlayers(){
        try {
            // const url = mode === 'Hot'? `${api}/players/hot` : `${api}players/random`
            const response = await axios.get(`${api}/players/random`, {headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }})
            console.log(response.data.data, 'Random players')
            setRandomPlayers(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function searchForPlayers(){
        setIsSearching(true)
        try {
            const response = await axios.post(`${api}/players/search`, {name:searchPlayer}, {headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }})
            console.log(response.data.data, 'searcgedplayers')
            const searchedResult = response.data.data
            setSearchedPlayer(response.data.data)
            navigation.navigate('PlayerListsScreen', {result:searchedResult })
        } catch (error) {
            console.log(error.message)
        }
        setIsSearching(false)
    }
    // useEffect(()=>{
    //     searchForPlayers()
    // },[searchPlayer])

    if(isSearching){
        return <LoadingOverlay message={`Searching for ${searchPlayer}`} />
    }

    function renderNewsItem(itemData){
        const item = itemData.item
        const playerProps = {
            id: item.id,
            name: item.name,
            team_name: item.team_name,
            hash_image: item.hash_image,
            country_name:item.country_name
        }
        function selectPlayer(){
            navigation.navigate('PlayerDetailScreen',{
                playerId: playerProps.id
            })
         }
            return <FootballNewView {...playerProps} onPress={selectPlayer} />
    }

    return (
    <View style={styles.root}>
        <View style={styles.searchContainer}>
            <TextInput style={styles.search} value={searchPlayer} placeholder='Search for players by name' onChangeText={(text)=>setSearchPlayer(text)} />
            <PrimaryButton onPress={searchForPlayers} style={{marginHorizontal: 0, width: 100}}>
                Search
            </PrimaryButton>
            {/* <IconButton icon={'md-filter'} color='black' size={35} styless={styles.icon} onPress={filterHandler} /> */}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>

                <Pressable style={({pressed})=>pressed && styles.pressed} onPress={toggleMode}>
                <View style={styles.outerContainer}>
                    <Text style={styles.innerText}>{`Toggle to ${mode === 'Hot' ? 'Random' : 'Hot'} Players`}</Text>
                </View>
                </Pressable>
        </View>
        <View style={styles.hotContainerCol}>

            <View style={styles.hotContainer}>
                <Ionicons name='flame' size={35} color={'red'} />
                <Text style={{fontWeight: 'bold', fontSize: 18}}>{mode === "Hot"?"Hot":"Random"}</Text>
            </View>

           <FlatList
            data={mode === 'Hot'? players: randomPlayers}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={renderNewsItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: 'white'
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        marginTop: 10
    },
    search:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        marginHorizontal: 22,
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '100%'
    },
    icon:{
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft:4,
        borderRadius: 5
    },
    hotContainerCol:{
        width: '100%',
        // paddingHorizontal: 16,
        marginTop: 16,
        marginBottom: 26,
        flex:1
    },
    hotContainer:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    hotContainerRow:{
        flexDirection: 'row',
        width: '100%',
        // justifyContent: 'space-between',
        marginLeft: 10,
        // marginRight: 20,
    },
    row:{
        paddingRight: 13,
        elevation: 2,
    },
    rowContainer:{
        // borderWidth: 1,
        // borderColor: 'black',
        backgroundColor: 'white',
        width: 180,
        height: 210,
        borderRadius: 10,
        elevation: 2,

    },
    image:{
        width: 150,
        height: 150,
    },
    infoContainer:{
        paddingHorizontal:14
        // flexDirection: 'row'
    },
    pressed:{
        opacity: 0.65
    },
    outerContainer: {
        marginHorizontal: 20,
        width: 250,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'visible',
        backgroundColor: 'green',
      },
      innerText:{
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
        // textDecorationLine:'underline'
      },
      pressed: {
        opacity: 0.75,
        overflow: 'visible',
        borderRadius: 10,
        color: 'white'

      }
})
