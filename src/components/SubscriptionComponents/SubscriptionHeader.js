import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Children} from 'react';
import MIcon from '../CoreComponents/MIcon';
import BadgetIcon from '../BadgetIcon';

const SubscriptionHeader = () => {
  return (
    <View className="bg-white p-3 flex-row justify-between items-center">
      <Image
        className="w-28 h-10"
        source={require('../../assets/images/logo.png')}
      />

      <View className="flex-row  justify-center items-center gap-5">
        <MIcon name={'bar-chart-outline'} size={25} />
        <View>
          <BadgetIcon label={9} iconName={'notifications-outline'} size={25} />
        </View>
        <MIcon name={'search-outline'} size={25} />
        <Image
          className="w-8 h-8 rounded-full"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneF6YlKoPHrVxJAnSHV5edlYqs0FSV8rIxA&usqp=CAU',
          }}
        />
      </View>
    </View>
  );
};

export default SubscriptionHeader;

const styles = StyleSheet.create({});
