import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
const api = 'https://e-scout.onrender.com'


const SingleNewsDetailsScreen = ({route,navigation}) => {
  const newsId = route.params.id
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([])
  useEffect(() => {
    async function getSingleNews() {
      try {
        const res = await axios.get(`${api}/s/new/${newsId}`, {
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
    getSingleNews()
  }, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'News Detail',
    });
  }, []);
  console.log(news)
  return (<View>
      
  </View>
  );
}

export default SingleNewsDetailsScreen;
