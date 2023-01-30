import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Basket from "./screens/Basket";
import CategoryDetail from "./screens/CategoryDetail";
import FoodDetail from "./screens/FoodDetail";
import Login from "./screens/Login";
import Main from "./screens/Main";
import Ordered from "./screens/Ordered";
import Preparing from "./screens/Preparing";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="main"
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="detail"
            component={FoodDetail}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="category-detail" component={CategoryDetail} />
          <Stack.Screen name="basket" component={Basket} />
          <Stack.Screen
            name="ordered"
            component={Ordered}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="preparing"
            component={Preparing}
            options={{ headerShown: false, presentation:"fullScreenModal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
