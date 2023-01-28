import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex flex-1 items-center justify-center">
      <View >
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

    </SafeAreaView>
  );
}
