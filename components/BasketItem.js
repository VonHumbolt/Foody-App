import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";

const BasketItem = ({ name, imageUrl, count, price }) => {
  return (
    <View className="p-5 border-t border-gray-300 shadow-lg">
      <View className="flex flex-row space-x-5 items-start">
        <Image
          className="w-24 h-24 object-cover"
          source={{ uri: imageUrl }}
          width={100}
          height={100}
        />

        <View className="flex-1 py-2">
          <Text className="text-lg font-semibold pb-5">{name}</Text>
          <View className="flex flex-row justify-between items-center">

            <View className="flex flex-row items-center space-x-3">
              <TouchableOpacity className="p-1 border border-gray-300 rounded-full">
                <MinusIcon size={20} color="#FF6B00" />
              </TouchableOpacity>
              <Text className="text-lg font-semibold">{count}</Text>
              <TouchableOpacity className="p-1 border border-gray-300 rounded-full">
                <PlusIcon size={20} color="#FF6B00" />
              </TouchableOpacity>
            </View>

            <Text className="text-2xl font-semibold pr-3">{price}₺</Text>

          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketItem;
