import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imageuri, Title}) => {
  return (
    <TouchableOpacity className=' relative mr-3'>
        <Image 
        source={{
            uri:imageuri
        }}
        className='h-20 w-20 rounded'
        />
      <Text className='left-1 bottom-1 absolute text-white font-bold'>{Title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard