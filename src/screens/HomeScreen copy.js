import {FlatList, StyleSheet, Text, View} from 'react-native';
import React,{useEffect, useState} from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import { NativeStackView } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation = useNavigation();
const [videos,setVideos]=useState([])
  const getVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',

        
    {
      params: {
        key:'AIzaSyC_5DBVu2qd_OZR4bJ63k0lwFqSO1OM_SE',
        part:'snippet',
        chart:'mostPopular',
        maxResult:10,
      },
  
    }
      );
     // console.log(response.data.items);
      setVideos(response.data.items)
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
getVideos()
},[])
console.log(videos[3]?.id)


  return (
    <View className="flex-1">
      <Header />

  <FlatList
  data={videos}
  renderItem={({item})=>{
   //console.log(item)
  return(
    <HomeCard videoInfo={item} onPress={()=>navigation.navigate('VideoScreen',{'video':item})}/>
  )
  }
   
  }
  />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});