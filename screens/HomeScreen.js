import { Pressable, StyleSheet, Text, View, Image, FlatList, ScrollView, ActivityIndicator, Alert } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import IconButton from "../components/IconButton";
import axios from 'axios'
import { AuthContext } from "../context/AuthContext";
import FootballNewView from "../components/FootballNewView";
import LoadingOverlay from "../components/LoadingOverlay";
const api = 'https://e-scout.onrender.com'
const HomeScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext)
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  // const token = "W26JaGHzWeyMXiq2esFAmLuY8sxc8qctf64wPIUirwD77rxtGDnHKpZocz8h";
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Feed",
    });
  }, []);
  useEffect(() => {
    async function getAllNews() {
      try {
        const res = await axios.get(`${api}/s/news`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        // console.log(res.data.data)
        setNews(res.data.data)
        setIsLoading(false);
      } catch (error) {
        console.log(error.message)
        Alert.alert('Network Error', error.message)
        setIsLoading(false);
      }
    }
    getAllNews()
  }, [])
  function trimText(text) {
    console.log(text?.length > 10 ? `${text?.substring(0, 10)}....` : text)
    return text?.length > 10 ? `${text?.substring(0, 10)}....` : text
  }
  function trimSummary(text) {
    return text?.length > 20 ? `${text?.substring(0, 20)}....` : text
  }

  // console.log(news)
  console.log(authCtx.userData)

  return (
    <View style={styles.root}>
      <ScrollView style={{ width: '100%', flex:1 }}>
        {isLoading ?
          <LoadingOverlay/>
          : (news) ?
            (
              news?.map(info => {
                return (
                  <View style={styles.footballContainer} key={info._id}>
                    <Pressable
                      style={({ pressed }) => [
                        pressed && styles.pressed,
                        //   styles.footballContainer,
                      ]}
                      onPress={()=>navigation.navigate('SingleNewsDetailsScreen', {id:info._id})}
                    >
                      <View style={styles.footCol}>
                        <View style={styles.pena}>
                          <Text>{trimText(info.name)}</Text>
                          <Text>{(info.date)}</Text>
                        </View>
                        <Text style={styles.title}>{trimSummary(info.summary)}</Text>
                      </View>
                      <View style={styles.imageCont}>
                        {/* <Image source={require('../assets/soccer.jpeg')} style={{ width: '100%', height: 300 }} /> */}
                        <Image source={{ uri: info.image }} style={{ width: '100%', height: 300 }} />
                      </View>
                    </Pressable>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                      <Text>{trimText(info.source)}</Text>
                      <IconButton icon={"share-outline"} color={"grey"} size={30} />
                    </View>
                  </View>
                )
              })
            )
            :
            <Text>No data available</Text>
        }
            {/* <Text>No data available</Text> */}

        {/* {news?.map(info=>{
       return (
        <View style={styles.footballContainer} key={info._id}>
      <Pressable
        style={({ pressed }) => [
          pressed && styles.pressed,
        ]}
      >
          <View style={styles.footCol}>
            <View style={styles.pena}>
              <Text>{trimText(info.name)}</Text>
              <Text>{(info.date)}</Text>
            </View>
            <Text style={styles.title}>{trimSummary(info.summary)}</Text>
          </View>
          <View style={styles.imageCont}>
            <Image source={{uri:info.image}} style={{ width: '100%', height: 300 }} />
          </View>
      </Pressable>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <Text>{trimText(info.source)}</Text>
            <IconButton icon={"share-outline"} color={"grey"} size={30} />
          </View>
        </View>
       )
      })} */}

      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  footballContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 440,
    marginVertical: 10
  },
  footCol: {
    width: "100%",
    paddingHorizontal: 12
  },
  pena: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15
  },
  imageCont: {
    width: '100%'
  },
  image: {
    width: 200,
    height: 300
  }
});
