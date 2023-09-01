import {Text, View } from 'react-native'
import React from 'react'

const TrendingHeader = ({head}) => {
  return (
    <View className='bg-white p-3'>
      <Text>{head}</Text>
    </View>
  )
}

export default TrendingHeader

