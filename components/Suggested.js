import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StarIcon, PlusIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Suggested = () => {
  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate("detail", {
      id: 2,
      name: "Fettuccine",
      description: "Fettuccine Makarna, Domates Sos ve Baharatlar.",
      imageUrl:
        "https://www.pngplay.com/wp-content/uploads/4/Pasta-PNG-Pic-Background.png",
      rating: 4.5,
      price: 45,
    });
  };

  return (
    <View className="py-3">
      <Text className="text-xl font-semibold px-6 pb-3">Önerilen</Text>

      <TouchableOpacity
        className="relative flex flex-row px-4 border-t border-b border-gray-200
      shadow-md pb-2"
        onPress={() => navigateToDetail()}
      >
        <Image
          className="w-1/3 h-32 object-cover mt-4 ml-1"
          source={{
            uri: "https://www.pngplay.com/wp-content/uploads/4/Pasta-PNG-Pic-Background.png",
          }}
          alt=""
          width={100}
          height={100}
        />

        <View className="flex w-1/2 justify-center px-2">
          <Text className="text-lg font-semibold pb-1">Fettuccine</Text>
          <Text className="text-xs text-gray-500">
            Fettuccine Makarna, Domates Sos ve Baharatlar.
          </Text>
          <View className="flex flex-row justify-between pt-6">
            <View
              className="flex flex-row items-center space-x-1 bg-[#FF6B00]
                rounded-full px-2 py-1"
            >
              <StarIcon color="white" size={15} />
              <Text className="font-semibold text-white px-1">4.5</Text>
            </View>
            <Text className="text-2xl font-bold ">45₺</Text>
          </View>
        </View>

        <TouchableOpacity className="absolute top-3 right-5 p-1 rounded-full border border-gray-200">
          <PlusIcon size={20} color="#FF6B00" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default Suggested;

const styles = StyleSheet.create({});
