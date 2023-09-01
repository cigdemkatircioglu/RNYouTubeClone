import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from './CoreComponents/MIcon';
import IconBox from './CoreComponents/IconBox';
import PressebleIcon from './CoreComponents/PressebleIcon';
const VideoHeader = ({header}) => {
  const [headHeight, setHeadHeight] = useState(null);

  console.log('header', header.longHeader);

  const heightAnimation = useRef(new Animated.Value(0)).current;

  const handleToggleHeadHeight = () => {
    if (headHeight === null) {
      Animated.timing(heightAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
      setHeadHeight('h-20');
    } else {
      Animated.timing(heightAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
      setHeadHeight(null);
    }
  };

  const interpolatedHeight = heightAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['32%', '50%'],
  });
  return (
    <View className="bg-stone-900 p-4">
      <View className="">
        <View style={{height: interpolatedHeight}}>
          <View
            className={`flex-row justify-between px-2 gap-3 ${headHeight} `}>
            <Text className="text-white text-lg font-semibold">
              {headHeight ? header.longHeader : header.shortHeader + '...'}
            </Text>

            {headHeight ? (
              <PressebleIcon
                onPress={() => setHeadHeight(null)}
                name={'chevron-up-outline'}
                color={'white'}
                size={25}
              />
            ) : (
              <PressebleIcon
                onPress={() => setHeadHeight('h-20')}
                name={'chevron-down-outline'}
                color={'white'}
                size={25}
              />
            )}
          </View>
        </View>
        <View>
          <Text className="text-stone-500 mt-2 ml-3">
            1.057.571 görüntüleme
          </Text>
        </View>
      </View>

      <View className="flex-row justify-between px-3">
        <IconBox name={'thumbs-up'} value={1} />
        <IconBox name={'thumbs-down'} value={'Beğenmedim'} />
        <IconBox name={'share'} value={'Paylaş'} />
        <IconBox name={'download'} value={'İndir'} />
        <IconBox name={'bookmark'} value={'Kaydet'} />
      </View>
    </View>
  );
};

export default VideoHeader;

const styles = StyleSheet.create({});
