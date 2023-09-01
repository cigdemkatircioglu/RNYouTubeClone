import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';

const HomeCard = ({onPress, videoInfo,theme}) => {
  // console.log(videoInfo)
  
  const publishDate = videoInfo?.snippet.publishedAt.split('');

  
  const stringPublishDate = publishDate?.slice(11, 16).join('');
 

  const videoTitle = videoInfo?.snippet.title.split('').slice(0, 40).join('');

  //console.log(videoTitle);
  return (
    <TouchableOpacity onPress={onPress}>
     
      <View className="justify-center items-center relative">
        <Image
          className="w-screen h-60"
          source={{
            uri: `${videoInfo?.snippet.thumbnails.standard.url}`,
          }}
        />

        <View className="bg-slate-800 rounded absolute right-4 bottom-3">
          <Text className=" text-white p-1  ">6:43</Text>
        </View>
      </View>

    

      <View className="p-2 flex-row justify-between items-center">
        <View className="gap-2 flex-row items-center">
          <Image
            className="rounded-full w-10 h-10"
            source={{
              uri: 'https://images.unsplash.com/photo-1682687982183-c2937a74257c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNjh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            }}
          />

          <View>
            <Text className={` ${theme == 'dark' ? 'text-white' : 'text-black '} text-base font-semibold`} >
              {videoTitle}...
            </Text>
            <View className="flex-row gap-2">
              <Text className="text-stone-500 ">
                {videoInfo?.snippet.channelTitle}
              </Text>
              <Text className="text-stone-500">250.000</Text>
              <Text className="text-stone-500">{stringPublishDate}</Text>
            </View>
          </View>
        </View>
        <MIcon
          name={'ellipsis-vertical'}
          size={20}
          color={'rgb(120 113 108)'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});