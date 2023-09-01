import {Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNavigation from './src/navigations/BottomNavigation'
import { VideoProvider } from './src/context/VideosStore'

const App = () => {
  return (
    <VideoProvider>
      <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <BottomNavigation/>
      </NavigationContainer>
    </SafeAreaView>
    </VideoProvider>
  )
}

export default App

