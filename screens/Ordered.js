import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/slices/basketSlice";
import { ChevronDownIcon, ChevronUpIcon } from "react-native-heroicons/outline";

const Ordered = () => {
  const {
    params: { totalPrice },
  } = useRoute();

  const navigation = useNavigation();

  const basketItems = useSelector(selectBasketItems);

  const [isBasketDetailOpen, setIsBasketDetailOpen] = useState(false);

  return (
    <SafeAreaView>
      <View className="h-1/4 justify-end">
        {/* Image */}
        <Image
          className="w-full object-contain"
          source={require("../assets/spagetti-bg.png")}
          width={100}
          height={100}
        />
        <Text className="text-3xl p-6 text-[#FF6B00] font-bold">
          Siparişini Aldık!
        </Text>
      </View>

      <ScrollView className="rounded-t-[64px] bg-white shadow-lg">
        <View className="h-screen">
          <Text className="px-8 pt-10 text-lg text-[#FF6B00] font-semibold">
            Sipariş Detayı
          </Text>
          <View className="border border-gray-200 my-3 mx-2" />

          <View className="flex flex-row justify-between items-center px-8 py-4">
            <Text className="font-semibold">Sipariş Numarası:</Text>
            <Text className="text-[#FF6B00] font-semibold">3655432123</Text>
          </View>

          <View className="border border-gray-200 my-3 mx-5" />

          <View className="flex flex-row justify-between items-center px-8 py-4 w-full">
            <Text className="font-semibold">Teslimat Adresi:</Text>
            <Text className="text-gray-500 font-semibold w-40 text-end">
              Atatürk Mah. Köprü Sk. No:22
            </Text>
          </View>

          <View className="border border-gray-200 my-3 mx-5" />

          <View className="flex flex-row justify-between items-center px-8 py-4 w-full">
            <Text className="font-semibold">Toplam:</Text>
            <Text className="text-gray-600 font-semibold text-end">
              {totalPrice}₺
            </Text>
          </View>

          <View className="border border-gray-200 my-3 mx-5" />

          <View className="flex flex-row justify-between items-center px-8 py-4 w-full">
            <Text className="font-semibold">Ödeme Yöntemi:</Text>
            <Text className="text-gray-500 font-semibold text-end">
              Online Kredi/Banka Kartı
            </Text>
          </View>

          <View className="border border-gray-200 my-3 mx-5" />

          <View className="flex flex-row justify-between items-center px-8 py-4 w-full">
            <Text className="font-semibold">
              Ürünleri Gör{" "}
              <Text className="text-[#FF6B00] font-bold">
                ({basketItems.length})
              </Text>
            </Text>
            <TouchableOpacity
              onPress={() => setIsBasketDetailOpen(!isBasketDetailOpen)}
            >
              {!isBasketDetailOpen ? (
                <ChevronUpIcon size={25} color="#FF6B00" />
              ) : (
                <ChevronDownIcon size={25} color="#FF6B00" />
              )}
            </TouchableOpacity>
          </View>
          {isBasketDetailOpen ? (
            <View>
              <View className="border border-gray-200 my-3 mx-5" />
              <View className="px-8 py-4">
                {basketItems.map((item) => (
                  <View key={item.id} className="flex flex-row justify-between px-16">
                    <Text className="text-end font-semibold">
                      {item.count} x
                    </Text>
                    <Text className="text-end font-semibold text-gray-500">
                      {item.name}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          <View className="border border-gray-200 my-3 mx-2" />

          <TouchableOpacity className="px-7 py-2 mb-5 mt-3 bg-[#FF6B00] rounded-full mx-auto"
          onPress={() => navigation.navigate("preparing")}>
            <Text className="text-lg font-bold text-white">Tamamla</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ordered;
