import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';
import YInput from './CoreComponents/YInput';

const CommentsCard = () => {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between p-2 ">
        <Text className="text-white text-sm font-semibold">Yorumlar</Text>
        <MIcon name={'chevron-expand-outline'} size={20} color={'white'} />
      </View>

      <View className="flex-row p-2 ">
        <Image
          className="w-10 h-10 rounded-full mr-2"
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1692340972716-f2e08765ef90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <YInput />
      </View>
    </View>
  );
};

export default CommentsCard;

const styles = StyleSheet.create({});
