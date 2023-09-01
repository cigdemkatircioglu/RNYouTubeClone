import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SubsFilterButton = ({
  label,
  onPress,
  index = {currentIndex: '', statcikIndex: ''},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` ${
        index.currentIndex == index.statcikIndex
          ? 'bg-stone-600'
          : 'bg-gray-300'
      }  p-1 px-2 m-1 rounded-md`}>
      <Text
        className={
          index.currentIndex == index.statcikIndex ? 'text-white' : 'text:dark'
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SubsFilterButton;

const styles = StyleSheet.create({});
