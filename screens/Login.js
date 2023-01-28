import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="w-2/3 h-[200px] mt-16 mx-auto">
        <Image
          className="object-contain w-full h-full "
          width={100}
          height={100}
          alt=""
          source={{
            uri: "https://cafe4u.ca/wp-content/uploads/2021/04/product-08.png",
          }}
        />
      </View>

      <View className="flex py-20 px-14">
        <Text className="text-3xl text-[#FF6B00] font-bold text-center">
          Merhaba!
        </Text>

        <View className="text-start mt-10">
          <Text className="px-1 py-2 font-semibold">
            Kullanıcı Adı / E-posta
          </Text>
          <TextInput
            className="border border-gray-300 px-3 py-3 rounded-xl"
            placeholder="Lütfen kullanıcı adı veya e-posta girin."
          ></TextInput>
        </View>
        <View className="text-start mt-3">
          <Text className="px-1 py-2 font-semibold">Şifre</Text>
          <TextInput
            className="border border-gray-300 px-3 py-3 rounded-xl"
            placeholder="Lütfen şifrenizi girin."
          ></TextInput>
        </View>

        <TouchableOpacity
          className="bg-[#FF6B00] px-5 py-3 mt-6 mx-auto rounded-full shadow-lg"
          onPress={() => navigation.navigate("main")}
        >
          <Text className="text-md font-bold text-white">Giriş Yap</Text>
        </TouchableOpacity>

        <View className="mx-auto mt-10 space-y-2">
          <Text className="text-lg font-semibold text-center">
            Hesabın yok mu?
          </Text>
          <Text className="font-semibold text-center">
            Hemen <Text className="text-[#FF6B00] underline">Üye Ol </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
