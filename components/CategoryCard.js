import { View, Text, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, name }) => {
  return (
    <View className="px-2 py-4">
      <View className="p-2 border border-gray-300 rounded-lg shadow-md">
        <Image
          className="w-20 h-20 object-cover rounded-full"
          source={{uri:imageUrl}}
          width={100}
          height={100}
          alt=""
        />
      </View>
        <Text className="text-center pt-2 font-semibold text-gray-500">{name}</Text>
    </View>
  );
};

export default CategoryCard;
