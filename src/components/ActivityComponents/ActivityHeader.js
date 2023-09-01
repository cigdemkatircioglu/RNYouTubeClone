import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MIcon from '../CoreComponents/MIcon';
import {useNavigation} from '@react-navigation/native';
import PressebleIcon from '../CoreComponents/PressebleIcon';
const ActivityHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between p-3 bg-white">
      <View className="flex-row items-center justify-center gap-3">
        <PressebleIcon
          onPress={() => navigation.navigate('HomeStackScreen')}
          name={'arrow-back-outline'}
          size={24}
        />
        <Text className="font-semibold text-lg">Activities</Text>
      </View>

      <View className="flex-row items-center justify-center gap-3">
        <MIcon name={'bar-chart-outline'} size={25} />
        <MIcon name={'search-outline'} size={25} />
        <MIcon name={'ellipsis-vertical'} size={25} />
      </View>
    </View>
  );
};

export default ActivityHeader;

const styles = StyleSheet.create({});