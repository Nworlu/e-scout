import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Slider} from '@miblanchard/react-native-slider';
import PrimaryButton from '../components/PrimaryButton';
const Clubs = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'Chelsea' },
    { id: 2, name: 'New Castle' },
];
const Country = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'Nigeria' },
    { id: 2, name: 'France' },
];
const Sex = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
];
const Position = [
    //name key is must.It is to show the text in front
    { id: 1, name: 'Defender' },
    { id: 2, name: 'Striker' },
];
const FilterScreen = ({navigation}) => {
    const [value, setValue] = useState(1)
  
    function handleNavigation(){
      navigation.navigate('PlayerListsScreen')
    }
  return (
    <View style={styles.container}>
        <View>

        <View>
      <Text>Clubs</Text>
      <SearchableDropdown
          onTextChange={(Clubs) => console.log(Clubs)}
          //On text change listner on the searchable input
          onItemSelect={(Clubs) => alert(JSON.stringify(Clubs))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '100%',
          }}
          items={Clubs}
          //mapping of item array
          defaultIndex={0}
          //default selected item index
          placeholder="Select Club"
          //place holder for the search input
          resetValue={true}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        </View>
        <View>
      <Text>Country</Text>
      <SearchableDropdown
          onTextChange={(Country) => console.log(Country)}
          //On text change listner on the searchable input
          onItemSelect={(Country) => alert(JSON.stringify(Country))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '100%',
          }}
          items={Country}
          //mapping of item array
          defaultIndex={0}
          //default selected item index
          placeholder="Select Country"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        </View>
        <View>
      <Text>Sex</Text>
      <SearchableDropdown
          onTextChange={(Sex) => console.log(Sex)}
          //On text change listner on the searchable input
          onItemSelect={(Sex) => alert(JSON.stringify(Sex))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '100%',
          }}
          items={Sex}
          //mapping of item array
          defaultIndex={0}
          //default selected item index
          placeholder="Select Sex"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        </View>
        <View>
      <Text>Position</Text>
      <SearchableDropdown
          onTextChange={(Position) => console.log(Position)}
          //On text change listner on the searchable input
          onItemSelect={(Position) => alert(JSON.stringify(Position))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '100%',
          }}
          items={Position}
          //mapping of item array
          defaultIndex={0}
          //default selected item index
          placeholder="Select Position"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        </View>
        <View style={styles.sliderContainer}>
            <Text>Age</Text>
            <Text>Between: 1 - 40</Text>
            <Slider
            value={value}
            onValueChange={value=>setValue(value)}
            minimumValue={1}
            maximumValue={40}
            minimumTrackTintColor={'black'}
            thumbTouchSize={{width: 40, height: 40}}
            thumbTintColor={'blue'}
            // debugTouchArea={true}
            />
            <Text>Value: {parseInt(value)}</Text>
        </View>
        </View>

        <View>
          <PrimaryButton  style={{width: '100%', marginHorizontal: 0, }} onPress={handleNavigation} >
            <Text>Search</Text>
            {/* <Ionicons name='search' size={30} color='white' /> */}
          </PrimaryButton>
        </View>
    </View>
  )
}

export default FilterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        paddingBottom: 25
    },
    sliderContainer:{
        marginTop: 10,
        // marginHorizontal: 15,
        alignItems: 'stretch',
        justifyContent: 'center',
    }
})