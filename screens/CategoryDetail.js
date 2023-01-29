import { View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeartIcon, ShoppingBagIcon } from "react-native-heroicons/outline";
import CategoryDetailCard from "../components/CategoryDetailCard";

const CategoryDetail = () => {
  const navigation = useNavigation();

  const {
    params: { name },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "",
      headerTintColor: "#FF6B00",
      title: name,
      headerRight: () => (
        <View className="flex flex-row items-center space-x-2">
          <HeartIcon size={25} color="#FF6B00" />
          <ShoppingBagIcon size={25} color="#FF6B00" />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView className="bg-gray-100/80">
      <CategoryDetailCard
        id={3}
        name="Peynirli Makarna"
        description="Fettucine Makarna, Kaşar Peyniri. (Roka ve Domates eşliğinde)"
        imageUrl="https://freepngdesign.com/content/uploads/images/t_grilled-chicken-salad-2025.png"
        price={40}
        rating={4.5}
      />
      <CategoryDetailCard
        id={4}
        name="Cannelloni"
        description="Cannelloni Makarna, Kaşar Peyniri, Nohut taneleri ve Brokoli"
        imageUrl="https://i2.wp.com/catchhimcafe.com/wp-content/uploads/2021/06/mmm.jpg?fit=1080%2C720&ssl=1"
        price={55}
        rating={4.7}
      />
      <CategoryDetailCard
        id={5}
        name="Tavuklu Makarna"
        description="Penne Makarna, Domates Sosu, Izgara Tavuk Parçaları ve Baharatlar."
        imageUrl="https://cdn.ye-mek.net/App_UI/Img/out/420/2020/06/sosuyla-pisen-makarna-resimli-yemek-tarifi(11).jpg"
        price={55}
        rating={4.9}
      />
      <CategoryDetailCard
        id={6}
        name="Karidesli Makarna"
        description="Spagetti Makarna, Midye, Krema ve Baharatkar."
        imageUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/baharatli-deniz-urunu-ve-cin-eristesi-noodle-3c23fc33-8a0c-4a22-8414-31b92bd5e9da.jpg"
        price={60}
        rating={4.3}
      />
      <CategoryDetailCard
        id={7}
        name="Midyeli Makarna"
        description="Spagetti Makarna, Midye, Krema ve Baharatkar."
        imageUrl="https://i.lezzet.com.tr/images-xxlarge-recipe/gigi-hadid-makarnasi-17fb70e5-7870-44c8-9506-95caae7ceae1.jpg"
        price={60}
        rating={4.3}
      />
      <CategoryDetailCard
        id={8}
        name="Domatesli Makarna"
        description="Spagetti Makarna, Midye, Krema ve Baharatkar."
        imageUrl="https://www.kadinx.com/wp-content/uploads/2021/01/gigi-hadid-makarna-tarifi.jpg"
        price={60}
        rating={4.3}
      />
      <CategoryDetailCard
        id={3}
        name="Kremalı Makarna"
        description="Spagetti Makarna, Midye, Krema ve Baharatkar."
        imageUrl="https://s3.eu-central-1.amazonaws.com/dijital.menu.assets/photos/Vg09v95evsjMdP1O/items/large/4a80fa189696e13be7168d1718f8ae2d.jpg"
        price={60}
        rating={4.3}
      />
    </ScrollView>
  );
};

export default CategoryDetail;
