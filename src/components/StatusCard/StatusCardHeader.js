import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../CoreComponents/Avatar';
import MIcon from '../CoreComponents/MIcon';

const StatusCardHeader = () => {
  return (
    <View className="flex-row justify-between items-center p-2 mt-5">
      <View className="flex-row">
        <Avatar
          avatarSource={
            'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
          }
        />
        <View className="ml-3">
          <Text className="font-semibold">Mehmet Can Seyhan</Text>
          <Text className="text-stone-500 mt-2">15 saat önce</Text>
        </View>
      </View>

      <MIcon name={'ellipsis-vertical'} size={24} />
    </View>
  );
};

export default StatusCardHeader;

const styles = StyleSheet.create({});
