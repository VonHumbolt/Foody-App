import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryDetailCard = ({ name, imageUrl, description, rating, price }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="py-1 px-2 shadow-lg"
      onPress={() => {
        navigation.navigate("detail", {
          name,
          imageUrl,
          description,
          rating,
          price,
        });
      }}
    >
      <View className="flex flex-row p-4 border-b border-gray-300 items-center justify-between">
        {/* Image */}
        <View className="p-2 rounded-xl border border-gray-300 shadow-lg">
          <Image
            className="w-24 h-24 object-cover"
            source={{ uri: imageUrl }}
            width={100}
            height={100}
          />
        </View>

        {/* Name and Description */}
        <View className="space-y-1 flex-1 px-3">
          <Text className="text-lg font-semibold">{name}</Text>
          <Text className="text-xs text-gray-500">{description}</Text>
        </View>

        <Text className="text-xl font-bold">{price}₺</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryDetailCard;
