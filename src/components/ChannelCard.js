import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';
import YButton from './CoreComponents/YButton';
const ChannelCard = ({channelTitle}) => {
  return (
    <View className="'p-2' flex-row justify-between items-center bg-stone-900 p-3 border-t border-stone-500 border-b">
      <View className="gap-2 flex-row items-center">
        <Image
          className="rounded-full w-10 h-10"
          source={{
            uri: 'https://images.unsplash.com/photo-1692715985639-c76779720e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />

        <View>
          <Text className='text-white'>{channelTitle}</Text>
          <View className="flex-row gap-2">
            <Text className="text-stone-500">5m Abone</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center  justify-center gap-2">
        <YButton style={{marginLeft: 5}} title={'Abone Ol'} />
        <MIcon color={'rgb(71,85,105)'} name={'notifications'} size={24} />
      </View>
    </View>
  );
};

export default ChannelCard;

const styles = StyleSheet.create({});