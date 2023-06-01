import React from 'react';
import { Image, Pressable, Text, View,StyleSheet } from 'react-native';
import IconButton from './IconButton';
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const FootballNewView = ({name,country_name,hash_image,team_name,onPress}) => {
    // console.log(mode)
    let navigation = useNavigation();
    function trimText(text){
        console.log(text?.length > 10? `${text?.substring(0, 10)}....`: text)
        return text?.length > 10? `${text?.substring(0, 10)}....`: text
 }
//  function selectPlayer(){
//     navigation.navigate()
//  }
  return (
    <View style={styles.hotContainerRow}>
                <Pressable onPress={onPress} style={({pressed})=> [pressed && styles.pressed, styles.row]}>
                <View style={styles.rowContainer}>
                    <View style={{alignItems: 'center'}}>
                        <Image style={styles.image} source={{uri: `https://images.sportdetect.com/${hash_image}.png`}}  onError={() => {
          // Display the default image if the requested image fails to load
          console.log(`Failed to load image: https://images.sportdetect.com/${hash_image}.png`);
        }}

        defaultSource={{ uri: 'https://cdn-icons-png.flaticon.com/512/166/166344.png' }}
        />
                    </View>
                        <View style={styles.infoContainer}>
                            <Text style={{fontSize: 13,marginBottom:5, width: '100%'}}>Name: {trimText(name)}</Text>
                            <Text style={{fontSize: 13,marginBottom:5, width: '100%'}}>Club: {team_name}</Text>
                            <Text style={{fontSize: 13,marginBottom:5, width: '100%'}}>Country: {country_name?country_name: 'Could not get the country'}</Text>
                        </View>
                </View>
                </Pressable>
     </View>
  );
}

export default FootballNewView;
const styles = StyleSheet.create({
    hotContainerRow:{
        // flexDirection: 'column',
        // overflow:'hidden',
        // width: '100%',
        // justifyContent: 'space-between',
        marginLeft: 10,
        // marginRight: 20,
        marginBottom:10,
        // flex: 1
    },
    row:{
        paddingRight: 13,
        elevation: 2,
        overflow: 'visible',
    },
    rowContainer:{
        // borderWidth: 1,
        // borderColor: 'black',
        backgroundColor: 'white',
        width: 180,
        height: 260,
        borderRadius: 10,
        elevation: 2,
        overflow: 'hidden',

    },
    image:{
        width: '100%',
        height: 150,
    },
    infoContainer:{
        paddingHorizontal:14
        // flexDirection: 'row'
    },
    pressed:{
        opacity: 0.65
    },
})
