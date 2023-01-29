import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { TrashIcon } from "react-native-heroicons/outline";
import BasketItem from "../components/BasketItem";

const Basket = ({ navigation }) => {
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
  }, [navigation]);

  return (
    <View>
      <ScrollView
        className="h-1/2 min-h-max"
        contentContainerStyle={{
          paddingTop: 20,
        }}
      >
        <BasketItem
          name="Tavuklu Makarna"
          count={2}
          price={110}
          imageUrl="https://freepngdesign.com/content/uploads/images/t_grilled-chicken-salad-2025.png"
        />
        <BasketItem />
        <BasketItem />
      </ScrollView>

        <View className="border-t border-gray-300">
            
        </View>

    </View>
  );
};

export default Basket;
