import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const ChangeCard = ({label,currentindex,staticindex,onPress}) => {


  return (
    <TouchableOpacity onPress={onPress} className={`flex-1 ${currentindex==staticindex ? 'border-b' :null}`}>
    <Text className='text-center m-3'>{label}</Text>


    </TouchableOpacity>
  )
}
 
export default ChangeCard

const styles = StyleSheet.create({})