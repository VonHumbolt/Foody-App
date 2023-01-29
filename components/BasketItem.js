import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../redux/slices/basketSlice";

const BasketItem = ({ id, name, imageUrl, count, price }) => {
  const dispatch = useDispatch();

  const basketItems = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );

  const [amount, setAmount] = useState(count);

  const increaseAmount = () => {
    setAmount(amount + 1)
    if(basketItems.length > 0) {
      dispatch(removeFromBasket({id}));
    }
    dispatch(addToBasket({ id, name, imageUrl, price, count: amount+1 }));
  };

  const decreaseAmount = () => {
    
    if(amount === 1) 
      dispatch(removeFromBasket({id}));
    else {
      setAmount(amount - 1)
      dispatch(removeFromBasket({id}));
      dispatch(addToBasket({ id, name, imageUrl, price, count: amount-1 }));
    }

  };

  return (
    <View className="p-5 border-t border-b border-gray-300 shadow-lg bg-white">
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
              <TouchableOpacity
                className="p-1 border border-gray-300 rounded-full"
                onPress={() => decreaseAmount(amount - 1)}
              >
                <MinusIcon size={20} color="#FF6B00" />
              </TouchableOpacity>
              <Text className="text-lg font-semibold">{amount}</Text>
              <TouchableOpacity
                className="p-1 border border-gray-300 rounded-full"
                onPress={() => increaseAmount()}
              >
                <PlusIcon size={20} color="#FF6B00" />
              </TouchableOpacity>
            </View>

            <Text className="text-2xl font-semibold pr-3">
              {price * amount}₺
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketItem;
