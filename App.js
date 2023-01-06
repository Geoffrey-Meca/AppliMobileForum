import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text style={{textAlign: 'center'}}>Je refuse de travailler pour aujourd'hui</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
