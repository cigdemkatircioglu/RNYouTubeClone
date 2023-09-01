import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TrendsHeader from '../components/TrendsComponents/TrendsHeader';
import ChangeCard from '../components/TrendsComponents/ChangeCard';
import TrendingHeader from '../components/TrendsComponents/TrendingHeader';
import HomeCard from '../components/HomeCard';
import { defaultVideo } from '../utils/defaultVideo';

const TrendingScreen = () => {
  const [changer, setChanger] = useState(1);
  return (
    <View className="flex-1 bg-white ">
      <TrendsHeader />

      <View className="bg-white w-100 flex-row justify-between border-b border-slate-300">
        <ChangeCard
          label={'Şimdi'}
          currentindex={changer}
          staticindex={0}
          onPress={() => setChanger(0)}
        />

        <ChangeCard
          label={'Müzik'}
          currentindex={changer}
          onPress={() => setChanger(1)}
          staticindex={1}
        />

        <ChangeCard
          label={'Oyun'}
          currentindex={changer}
          onPress={() => setChanger(2)}
          staticindex={2}
        />

        <ChangeCard
          label={'Filmler'}
          currentindex={changer}
          onPress={() => setChanger(3)}
          staticindex={3}
        />
      </View>

      {changer == 0 ? (
        <>
          <TrendingHeader head={'Anlık Trend Videolar'} />
          <HomeCard videoInfo={defaultVideo}/>
        </>
      ) : changer == 1 ? (
        <>
          <TrendingHeader head={'Trend Müzikler'} />
          <HomeCard videoInfo={defaultVideo}/>
        </>
      ) : changer == 2 ? (
        <>
          <TrendingHeader head={'Trend Oyunlar'} />
          <HomeCard videoInfo={defaultVideo} />
        </>
      ) : changer == 3 ? (
        <>
          <TrendingHeader head={'Trend Filmler'} />
          <HomeCard videoInfo={defaultVideo}/>
        </>
      ) : null}
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({});
