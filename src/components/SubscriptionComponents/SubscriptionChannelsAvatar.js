import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SubscriptionChannelsAvatar = ({channelAvatar, channelName,badge}) => {
  const channelNametoArray = channelName.split('');
  const karakterSayisi = channelNametoArray.length;

  return (
    <View className="items-center justify-center h-24 p-1 relative">
      <Image
        className="w-16 h-16 rounded-full mb-1"
        source={{
          uri: channelAvatar,
        }}
      />
      <Text>
        {karakterSayisi <= 8
          ? channelName
          : channelNametoArray.slice(0, 8).join('') + '...'}
      </Text>

      {badge &&  (<View className='bg-blue-700 rounded-full border-2 border-white w-3 h-3 absolute right-3 bottom-7'/>)}
    </View>
  );
};

export default SubscriptionChannelsAvatar;
