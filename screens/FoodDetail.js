import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import {MinusIcon, PlusIcon, StarIcon} from "react-native-heroicons/solid"

const FoodDetail = () => {
  const {params: {name, imageUrl, description, rating, price} } = useRoute();

    const [count, setCount] = useState(0)

  return (
    <View className="h-screen relative">
      <Image
        className="h-1/2 object-contain"
        source={{
          uri: "https://media.istockphoto.com/id/1409486889/photo/rustic-fall-flat-lay-background-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=bIZTztfX1Eu0C3mt8i8bJ6fJVWjnhxmLYiz0cTBvUHI=",
        }}
        alt=""
        width={100}
        height={100}
      />
      <View className="absolute top-36 z-10 w-full">
        <Image
          className="w-72 h-72 object-contain mx-auto"
          source={{
            uri: imageUrl,
          }}
          alt=""
          width={100}
          height={100}
        />
      </View>
      <ScrollView className="flex-1 absolute top-72 h-screen w-full bg-white rounded-t-[64px]">
        <View className="mt-40 h-max px-10 flex">
          
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center space-x-2 py-1 px-3 bg-[#FF6B00] rounded-full">
                <StarIcon size={20} color="white" />
                <Text className="text-lg text-white font-semibold">{rating}</Text>
            </View>
            <Text className="text-3xl font-bold">{price}₺</Text>
          </View>

          <View className="py-8 w-full">
            <Text className="text-xl pb-2 font-bold">{name}</Text>
            <Text className="text-md text-gray-600">{description}</Text>
          </View>
          
          <Text className="text-gray-500 pb-2">Pozisyon Tercihi</Text>
          <View className="border-b border-t border-gray-300 py-3 space-y-2 px-4 shadow-lg">
            <Text className="text-md">1 Porsiyon</Text>
            <Text>1.5 Porsiyon {" "}
                <Text className="font-semibold text-[#FF6B00]">+10 ₺</Text>
            </Text>
          </View>

          <View className="flex flex-row justify-between items-start py-8">

            <View className="flex flex-row items-center space-x-2">
                {/* Minus */}
                <TouchableOpacity className="p-2 border border-gray-200 rounded-full"
                onPress={() => count!==0 && setCount(count-1)}>
                    <MinusIcon size={20} color="gray"/>
                </TouchableOpacity>
                {/* Count */}
                <Text className="text-lg font-semibold">{count}</Text>
                {/* Plus */}
                <TouchableOpacity className="p-2 border border-gray-200 rounded-full"
                onPress={() => setCount(count+1)}>
                    <PlusIcon size={20} color="#FF6B00"/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity className="py-2 px-3 rounded-full bg-[#FF6B00]">
                <Text className="text-lg text-white font-semibold">Sepete Ekle</Text>
            </TouchableOpacity>

          </View>

        </View>
        
      </ScrollView>
    </View>
  );
};

export default FoodDetail;
