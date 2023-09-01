import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReadMoreCard = ({content}) => {
  const statusContent = content.split('');

  const karakterSayisi = statusContent.length;
  return (
    <View className="mt-5">
      <Text>
        {karakterSayisi <= 8
          ? content
          : statusContent.slice(0, 25).join('') + `\n...Devamını Oku`}
      </Text>
    </View>
  );
};

export default ReadMoreCard;
