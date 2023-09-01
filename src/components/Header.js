import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Children} from 'react';
import MIcon from './CoreComponents/MIcon';

const Header = () => {
  return (
    <View className="bg-white p-3 flex-row justify-between items-center">
      <Image
        className="w-28 h-10"
        source={require('../assets/images/logo.png')}
      />

      <View className="flex-row items-center gap-3">
        <MIcon name={'videocam-outline'} size={25} />
        <MIcon name={'search-outline'} size={25} />
        <Image
          className="w-8 h-8 rounded-full"
          source={{
            uri: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
