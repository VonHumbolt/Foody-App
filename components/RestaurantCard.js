import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RestaurantCard = ({name, imageUrl}) => {
  return (
    <TouchableOpacity className="px-2">
        
        <Image 
            className="w-40 h-40 object-cover rounded-lg"
            source={{uri:imageUrl}} 
            alt=""
            width={100}
            height={100}
        />
      <Text className="font-semibold py-2 px-1">{name}</Text>
    </TouchableOpacity>
  )
}

export default RestaurantCard