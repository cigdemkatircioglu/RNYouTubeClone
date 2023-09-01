import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const YButton = ({title,onPress,style}) => {
  return (
    <TouchableOpacity  className= 'bg-red-600 px-3 py-1 rounded-lg' style={style} onPress={onPress}>
        <Text className='text-white text-bold  '>{title} </Text>
    </TouchableOpacity>
    
  )
}

export default YButton

const styles = StyleSheet.create({})