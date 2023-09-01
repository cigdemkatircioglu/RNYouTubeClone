import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import MIcon from '../components/CoreComponents/MIcon';
import VideoHeader from '../components/VideoHeader';
import ChannelCard from '../components/ChannelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import {VideoContext} from '../context/VideosStore';
import {useNavigation} from '@react-navigation/native';
import VideoPlayer from 'react-native-video-player'
const VideoScreen = props => {
  const navigation = useNavigation();
  const {vvideos} = useContext(VideoContext);
  console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  console.log(videoDetail.videoId);

  return (
    <View className="flex-1 bg-stone-900 ">
      <TouchableOpacity
        onLongPress={() => console.log('merhaba')}
        className="h-58">
        <VideoPlayer
          video={{
            uri: 'https://www.youtube.com/watch?v=XSc2MzIqUqw',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: videoDetail?.videoThumbnail}}
        />
      </TouchableOpacity>

      <ScrollView>
        <View style={{flex: 1}}>
          <VideoHeader
            header={{
              shortHeader: videoDetail?.videoTitle,
              longHeader: videoDetail?.videoHeader,
            }}
          />
          <ChannelCard channelTitle={videoDetail?.channelTitle} />
          <CommentsCard />
        </View>
        <View className="bg-stone-900" style={{flex: 1}}>
          <Text>
            <FlatList
              data={vvideos}
              renderItem={({item}) => (
                <HomeCard
                  videoInfo={item}
                  theme={'dark'}
                  onPress={() =>
                    navigation.navigate('VideoScreen', {video: item})
                  }
                />
              )}
            />
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});
