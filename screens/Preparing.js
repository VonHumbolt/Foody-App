import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { XMarkIcon } from "react-native-heroicons/outline";

const Preparing = ({ navigation }) => {
  return (
    <SafeAreaView className=" bg-[#eb5b5c] flex-1 ">
      <View className="relative">
        <TouchableOpacity
          className="absolute top-5 right-5"
          onPress={() => navigation.navigate("main")}
        >
          <XMarkIcon color="white" size={40} />
        </TouchableOpacity>
        <View className="mt-28 justify-center items-center">
          <Text className="text-4xl text-white font-bold px-10 text-center">
            Siparişiniz Hazırlanıyor
          </Text>
          <Text className="text-lg py-6 text-white font-semibold text-center">
            Bu ekranı kapatabilirsiniz
          </Text>

          <Animatable.Image
            source={require("../assets/preparing.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-96 w-96 mt-20"
            width={100}
            height={100}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Preparing;
