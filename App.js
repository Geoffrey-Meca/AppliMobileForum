import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Bienvenue les copain, il est temps de se mettre au boulot !</Text>
        <StatusBar style="auto" />
      </View>

    </SafeAreaView>
  );
}
