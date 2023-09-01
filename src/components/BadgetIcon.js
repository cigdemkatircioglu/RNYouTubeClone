import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from './CoreComponents/MIcon';

const BadgetIcon = ({label, iconName, size, color}) => {
  return (
    <View className="relative ">
      <MIcon name={iconName} size={size} />
      <View className="absolute bg-red-500  w-5 h-4 rounded-full items-center justify-center left-3 bottom-3">
        <Text className=" text-white text-center" style={{fontSize: 12}}>
          {label}+
        </Text>
      </View>
    </View>
  );
};

export default BadgetIcon;

const styles = StyleSheet.create({});
