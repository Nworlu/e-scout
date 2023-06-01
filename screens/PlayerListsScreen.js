import React from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import FootballNewView from '../components/FootballNewView'

const PlayerListsScreen = ({route,navigation}) => {
  const searchedResult = route.params.result
  console.log(searchedResult)

  function renderNewsItem(itemData){
    const item = itemData.item
    const playerProps = {
        id: item.id,
        name: item.name,
        team_name: item.team_name,
        hash_image: item.hash_image,
    }
    function selectPlayer(){
        navigation.navigate('PlayerDetailScreen',{
            playerId: playerProps.id
        })
     }
        return <FootballNewView {...playerProps} onPress={selectPlayer} />
}


  return (
    <View>
     <FlatList
      data={searchedResult}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={renderNewsItem}
      keyExtractor={(item) => item.id}
     />
    </View>
  )
}

export default PlayerListsScreen

const styles = StyleSheet.create({

})

