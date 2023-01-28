import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon, PlusIcon } from "react-native-heroicons/solid";

const Trends = () => {
  return (
    <View className="py-3">
      <Text className="text-xl font-semibold px-6 pb-3">Popüler</Text>

      <TouchableOpacity
        className="relative flex flex-row border-t border-b border-gray-200
      shadow-md pb-2"
      >
        <Image
          className="w-1/3 h-32 object-cover mt-4 ml-3"
          source={{
            uri: "https://freepngdesign.com/content/uploads/images/t_grilled-chicken-salad-2025.png",
          }}
          width={100}
          height={100}
          alt=""
        />
        <View className="flex w-1/2 justify-center px-2">
          <Text className="text-lg font-semibold pb-1">Tavuklu Salata</Text>
          <Text className="text-xs text-gray-500">
            Izgara Tavuk Parçaları, Yeşillik, Domates ve Özel Ekşi Sos.
          </Text>

          <View className="flex flex-row justify-between pt-4">
            <View className="flex flex-row items-center space-x-1
             bg-[#FF6B00] px-2 py-1 rounded-full">
                <StarIcon size={15} color="white" />
              <Text className="text-white font-semibold px-1">4.9</Text>
            </View>
            <Text className="text-2xl font-bold">50₺</Text>
          </View>
        </View>

        <TouchableOpacity className="absolute top-3 right-5 border rounded-full
         p-1 border-gray-200">
            <PlusIcon size={20} color="#FF6B00" />
        </TouchableOpacity>

      </TouchableOpacity>

    </View>
  );
};

export default Trends;
