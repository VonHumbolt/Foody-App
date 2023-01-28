import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Trends from '../components/Trends'
import Suggested from '../components/Suggested'
import Restaurants from '../components/Restaurants'

const Main = () => {
  return (
    <SafeAreaView className="h-screen bg-white">
      
        {/* Header */}
        <Header />

      <ScrollView>
        
        {/* Categories */}
        <Categories />

        {/* Trends */}
        <Trends />
        
        {/* Suggested */}
        <Suggested />

        {/* Restaurants */}
        
        <Restaurants />

      </ScrollView>


    </SafeAreaView>
  )
}

export default Main