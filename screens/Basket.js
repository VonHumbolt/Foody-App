import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { TrashIcon } from "react-native-heroicons/outline";
import BasketItem from "../components/BasketItem";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/slices/basketSlice";

const Basket = ({ navigation }) => {
  const basketItems = useSelector(selectBasketItems);

  const [totalPrice, setTotalPrice] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "",
      headerTitle: "Sepetiniz",
      headerTintColor: "#FF6B00",
      headerRight: () => (
        <View>
          <TrashIcon size={25} color="#FF6b00" />
        </View>
      ),
    });

    calculateTotalPrice();
  }, [navigation, basketItems]);

  const calculateTotalPrice = () => {
    let total = 0;
    basketItems.forEach((item) => {
      total += item.count * item.price;
    });
    setTotalPrice(total);
  };

  return (
    <View className="relative bg-white">
      <View className="p-5 bg-gray-100" />
      <ScrollView className="h-1/3 min-h-max">
        {basketItems.map(({ id, name, count, price, imageUrl }) => (
          <BasketItem
            key={id}
            id={id}
            name={name}
            count={count}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
      </ScrollView>

      <View className="border-t border-gray-300">
        <Text className="mt-10 px-10 text-md text-gray-800">
          Eklemek istediğiniz bir not var mı?
        </Text>

        <View className="mx-10 my-3 h-24 border border-gray-400 rounded-xl bg-gray-100">
          <TextInput className="p-3 w-full h-full" multiline />
        </View>
      </View>
      {/* Bottom */}
      <View
        className="-bottom-56 flex flex-row border-t border-gray-300 py-5 px-8
          justify-between items-center bg-white"
      >
        <Text className="font-semibold text-lg">
          Toplam:{" "}
          <Text className="text-xl text-[#FF7B00] font-bold">
            {totalPrice}₺
          </Text>
        </Text>
        <TouchableOpacity className="py-2 px-4 rounded-full bg-[#FF6B00] shadow-lg">
          <Text className="text-lg text-white font-semibold">
            Sepeti Onayla
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Basket;
