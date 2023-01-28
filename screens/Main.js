import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Trends from '../components/Trends'

const Main = () => {
  return (
    <SafeAreaView className=" bg-white">
      
        {/* Header */}
        <Header />

        {/* Categories */}
        <Categories />

        {/* Trends */}
        <Trends />

    </SafeAreaView>
  )
}

export default Main