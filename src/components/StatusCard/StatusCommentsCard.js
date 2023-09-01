import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import Avatar from '../CoreComponents/Avatar';
const StatusCommentsCard = () => {
  return (
    <View className="bg-gray-300 p-3  m-auto rounded-lg mt-3 mb-3">
      <View className="flex-row mb-2">
        <Text>Yorumlar</Text>
        <Text> 1</Text>
      </View>

      <View className="flex-row justfy-between  ">
        <Image
          style={{width: 30, height: 30, borderRadius:15}}
          source={{
            uri: 'https://media.licdn.com/dms/image/C4D03AQEBSlBnM9EG4A/profile-displayphoto-shrink_100_100/0/1660888943743?e=1695859200&v=beta&t=yxhryLsEoFI9r2912fvISWpGHmyiVtAdrqxBquPVnbs',
          }}
        />
        <TextInput
          placeholderTextColor={'black'}
          className="bg-gray-400 w-4/5 m-auto rounded-full p-2 "
          placeholder="Yorumunuz"
        />
      </View>
    </View>
  );
};

export default StatusCommentsCard;

const styles = StyleSheet.create({});
