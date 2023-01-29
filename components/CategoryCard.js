import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imageUrl, name }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity className="px-2 py-4"
      onPress={() => navigation.navigate("category-detail", {
        name: name,
      })}
    >
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
    </TouchableOpacity>
  );
};

export default CategoryCard;
