import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import SubscriptionsScreen from '../screens/SubscriptionsScreen';
import ActivityScreen from '../screens/ActivityScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MIcon from '../components/CoreComponents/MIcon';
import HomeStack from '../screens/StackScreens/HomeStack';
import TrendsStack from '../screens/StackScreens/TrendsStack';

const BottomNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      screenOptions={{tabBarActiveTintColor: '#e91e63', headerShown: false}}>
       <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="home" color={color} size={size} />
          ),
        }}
        name="HomeStackScreen"
        component={HomeStack}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="musical-notes" color={color} size={size} />
          ),
        }}
        name="SubscriptionsScreen"
        component={SubscriptionsScreen}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="trending-up" color={color} size={size} />
          ),
        }}
        name="TrendingScreen"
        component={TrendingScreen}
      />
     

      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="notifications" color={color} size={size} />
          ),
        }}
        name="ActivityScreen"
        component={ActivityScreen}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MIcon name="folder" color={color} size={size} />
          ),
        }}
        name="LibraryScreen"
        component={LibraryScreen}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
