import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import SubscriptionHeader from '../components/SubscriptionComponents/SubscriptionHeader';
import SubscriptionChannelsAvatar from '../components/SubscriptionComponents/SubscriptionChannelsAvatar';
import SubsFilterButton from '../components/SubscriptionComponents/SubsFilterButton';
import HomeCard from '../components/HomeCard';
import StatusCard from '../components/StatusCard/StatusCard';
import { defaultVideo } from '../utils/defaultVideo';

const SubscriptionsScreen = () => {
  const [filterIndex, setFilterIndex] = useState(0);
  return (
    <ScrollView className="bg-white">
      <SubscriptionHeader />
      <View className="flex-row w-100 justify-between">
        <View className="w-4/5">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Mehmet Can Seyhan'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />

            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Udemig'}
              channelAvatar={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAllBMVEX///9wiugAAABaeuVtiOhrhudng+dkgeeYmJipqan9/f9hf+b8/PzFzvXx8fE9PT33+P4MDAxFRUXp6ekiIiLk6Prs7/vT2ve2wvKotvCEhISSkpK8vLzNzc2goKDL0/Z2j+l+leqHnOuUpu2vvPHc4fmhsO9SdOR1dXVqampSUlKzs7MqKirW1ta+yPONoexcXFw0NDTl9eLcAAADlElEQVRoge1Xa3OqMBBNIm8QFHyLSmu1Fh/t/f9/7m5AkEeyAt5+uDOcmY7SZU9OstmTSEiPHv8IUwuLHl4j/94hwZE9eoV7Zr8h0Zv98Qr5UdXlU7eoor4gfaRTZS+N7nSq3bqTL1RK7ZksGimUqp25LQpQl5LoXIeoNuxKPtQ4uyZZ13cQThWs4ChoAm0hDB70JKrPu3HP03QaCRtprybBrtKTeXNxokaa2WmQ2p3adHoXDtIF0aN6DyrfXcj3WbpoXWd5kOrT9tz5vIXiPh7kSJtJcXyk18VZ+iNIB9I2k2FU4KbqsRK9aVj0KRbFdFrxVisqBqnaUrpFy+llD9jppajW0nmHWpmdlqRHSmVs9LyqIapwlwxqrlejYoeQYF4VTqNC9F2pRmkb8np6oZEOVeHtnHdq19KV9zy6rwtvY197tZZOtcygZvWRJeYmhDA97/KjYOQW0pei9OwwHdVqnUpv6LwjIXfWSB/iaFPnXYi1pYepZOTGzlvfaXfyBTIyVRs5b63zc/DDVCYcu+AUUDWOwsyHyMhUaeC8NeMopL+RN+nIjZxXYBw5tKVcOJA/dV5B5z+gI6vCx37mvKLOzwD+gs2Lqk+cd4ZJgy7codIpLl3c+Xfh3D8w5U+cV2IchdQb9oYSYeTS/uNILvrS9k+A3XktLPN+UGILhzovutP09AIwkzcZLRwpdaD9l3X3N1bTwmlYAdL5oCmz1APWZnLnxYQXDgPsNanzTjHhhR8QuAdInBft/KjwIsYtufOina8Vrw4LdK9rIunoBi65xggtqch5rUHzBOHVJYddt6/l50COz/Llf4q9O/iU/aDv0aNHjx7PEISBOOCe3Q50m9OGEGdlpE9ntha/dmJfHci3bAu6mJc+hcyQaIg3nchNIB/78NUxz2ZC7pomX50wCMwQHs4kW69wfQ5lC4eTu4wDyDf8c0McdoHPL/5HiMlfO7EJPIVdyE9sFayA3BmPg2DsATkzYZz1dczchDxgPhRl63Qgdy7Awdf8yuLt1mNADoWYjB3is+BOHsMLZnNuyIKCck0g2EnIN+wS+3Gckbs5Oczth7E2W/IKvMB5IsRjV5i1kYzEUSeP/bXRbrv7zIeiXQkx2OWUFPSLxWtvWyd3x56xNq5tyF2Y6iTZAUDNC0qcU/Ifh8/gMknJzww25A9L99FvIOS8RquKNseG+dt1u4q2wNm7/Fn9EnePHv8D/gLHqTazzLt7bwAAAABJRU5ErkJggg=='
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />
            <SubscriptionChannelsAvatar
              badge={true}
              channelName={'Udemig'}
              channelAvatar={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAllBMVEX///9wiugAAABaeuVtiOhrhudng+dkgeeYmJipqan9/f9hf+b8/PzFzvXx8fE9PT33+P4MDAxFRUXp6ekiIiLk6Prs7/vT2ve2wvKotvCEhISSkpK8vLzNzc2goKDL0/Z2j+l+leqHnOuUpu2vvPHc4fmhsO9SdOR1dXVqampSUlKzs7MqKirW1ta+yPONoexcXFw0NDTl9eLcAAADlElEQVRoge1Xa3OqMBBNIm8QFHyLSmu1Fh/t/f9/7m5AkEeyAt5+uDOcmY7SZU9OstmTSEiPHv8IUwuLHl4j/94hwZE9eoV7Zr8h0Zv98Qr5UdXlU7eoor4gfaRTZS+N7nSq3bqTL1RK7ZksGimUqp25LQpQl5LoXIeoNuxKPtQ4uyZZ13cQThWs4ChoAm0hDB70JKrPu3HP03QaCRtprybBrtKTeXNxokaa2WmQ2p3adHoXDtIF0aN6DyrfXcj3WbpoXWd5kOrT9tz5vIXiPh7kSJtJcXyk18VZ+iNIB9I2k2FU4KbqsRK9aVj0KRbFdFrxVisqBqnaUrpFy+llD9jppajW0nmHWpmdlqRHSmVs9LyqIapwlwxqrlejYoeQYF4VTqNC9F2pRmkb8np6oZEOVeHtnHdq19KV9zy6rwtvY197tZZOtcygZvWRJeYmhDA97/KjYOQW0pei9OwwHdVqnUpv6LwjIXfWSB/iaFPnXYi1pYepZOTGzlvfaXfyBTIyVRs5b63zc/DDVCYcu+AUUDWOwsyHyMhUaeC8NeMopL+RN+nIjZxXYBw5tKVcOJA/dV5B5z+gI6vCx37mvKLOzwD+gs2Lqk+cd4ZJgy7codIpLl3c+Xfh3D8w5U+cV2IchdQb9oYSYeTS/uNILvrS9k+A3XktLPN+UGILhzovutP09AIwkzcZLRwpdaD9l3X3N1bTwmlYAdL5oCmz1APWZnLnxYQXDgPsNanzTjHhhR8QuAdInBft/KjwIsYtufOina8Vrw4LdK9rIunoBi65xggtqch5rUHzBOHVJYddt6/l50COz/Llf4q9O/iU/aDv0aNHjx7PEISBOOCe3Q50m9OGEGdlpE9ntha/dmJfHci3bAu6mJc+hcyQaIg3nchNIB/78NUxz2ZC7pomX50wCMwQHs4kW69wfQ5lC4eTu4wDyDf8c0McdoHPL/5HiMlfO7EJPIVdyE9sFayA3BmPg2DsATkzYZz1dczchDxgPhRl63Qgdy7Awdf8yuLt1mNADoWYjB3is+BOHsMLZnNuyIKCck0g2EnIN+wS+3Gckbs5Oczth7E2W/IKvMB5IsRjV5i1kYzEUSeP/bXRbrv7zIeiXQkx2OWUFPSLxWtvWyd3x56xNq5tyF2Y6iTZAUDNC0qcU/Ifh8/gMknJzww25A9L99FvIOS8RquKNseG+dt1u4q2wNm7/Fn9EnePHv8D/gLHqTazzLt7bwAAAABJRU5ErkJggg=='
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />

            <SubscriptionChannelsAvatar
              channelName={'Udemig'}
              channelAvatar={
                'https://yt3.googleusercontent.com/IMLk8SBoivrYE8VtuNXHajUzdpf8-28LG-LztRv9hxVYEUIWdx2r9UZS2lVdSwj0y1D18E06yQ=s176-c-k-c0x00ffffff-no-rj'
              }
            />
          </ScrollView>
        </View>

        <View
          className="w-1/5"
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text className="text-blue-700">Tümü</Text>
        </View>
      </View>

      <ScrollView
        horizontal={true}
        className="p-2"
        showsHorizontalScrollIndicator={false}>
        <SubsFilterButton
          label={'Tümü'}
          index={{currentIndex: filterIndex, statcikIndex: 0}}
          onPress={() => setFilterIndex(0)}
        />
        <SubsFilterButton
          label={'Bugün'}
          index={{currentIndex: filterIndex, statcikIndex: 1}}
          onPress={() => setFilterIndex(1)}
        />
        <SubsFilterButton
          label={'canlı'}
          index={{currentIndex: filterIndex, statcikIndex: 2}}
          onPress={() => setFilterIndex(2)}
        />
        <SubsFilterButton
          label={'İzlemeye devam edin'}
          index={{currentIndex: filterIndex, statcikIndex: 3}}
          onPress={() => setFilterIndex(3)}
        />
        <SubsFilterButton
          label={'İzlenmeyenler'}
          index={{currentIndex: filterIndex, statcikIndex: 4}}
          onPress={() => setFilterIndex(4)}
        />
      </ScrollView>

      <HomeCard videoInfo={defaultVideo} />
      
      <StatusCard/>

    </ScrollView>
  );
};

export default SubscriptionsScreen;

const styles = StyleSheet.create({});
