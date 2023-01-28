import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  Bars3Icon,
  HeartIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";

const Header = () => {
  return (       
      <View className="p-5 bg-white shadow-lg">
        <View className="flex flex-row items-center space-x-4">
          {/* MenuIcon */}
          <Bars3Icon size={30} color="#FF6B00" />
          {/* Address */}
          <Text className="flex-grow font-semibold">
            Atatürk Mah. Köprü Sk. No:22
          </Text>
          {/* Icons */}
          <View className="flex flex-row space-x-1 items-center justify-center">
            <HeartIcon size={25} color="#FF6B00" />
            <ShoppingBagIcon size={25} color="#FF6B00" />
          </View>
        </View>

        <View className="mt-4 flex flex-row items-center px-3 py-2
         border border-gray-300 rounded-full">
            <MagnifyingGlassIcon size={20} color="#FF6B00" />
            <TextInput className="px-2 w-full mr-3" placeholder="Yemek Arayın" />
        </View>

      </View>
  );
};

export default Header;
