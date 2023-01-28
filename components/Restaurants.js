import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const Restaurants = () => {
  return (
    <>
    <Text className="text-xl font-semibold px-6 py-3">Restoranlar</Text>
    <View className="border border-gray-100" />
    <ScrollView
        horizontal
        contentContainerStyle={{
            paddingTop:10,
            paddingHorizontal:20
        }}
        showsHorizontalScrollIndicator={false}
    >
        <RestaurantCard name="KFC" imageUrl="https://upload.wikimedia.org/wikipedia/tr/b/b8/KFC_logo.png" />
        <RestaurantCard name="McDonald's" imageUrl="https://ams3.digitaloceanspaces.com/outletcenter/2019/10/Logo.png" />
        <RestaurantCard name="Subway" imageUrl="https://therockbury.com/wp-content/uploads/2014/03/subway-logo-300x300.jpg" />
        <RestaurantCard name="Burger King" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png" />
    </ScrollView>
    </>
  )
}

export default Restaurants