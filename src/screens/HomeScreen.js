import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect,useContext} from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import axios from 'react-native-axios';
import {useNavigation} from '@react-navigation/native';
import VideosController from '../controller/VideosController';
import { VideoContext } from '../context/VideosStore';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {vvideos, setVvideos} = useContext(VideoContext)
  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const fetchVideo = await VideosController.getVideos();
      setVvideos(fetchVideo);
    } catch (error) {
      console.log(error,'ww');
    }
  };
  console.log(vvideos[0])

  return (
    <View className="flex-1">
      <Header />

      <FlatList
        data={vvideos}
        renderItem={({item}) => {
          //console.log(item)
          return (
            <HomeCard
              videoInfo={item}
              onPress={() => navigation.navigate('VideoScreen', {video: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
