import LandingScreen from './src/Screens/ScreenHome';
import IndexArticleScreen from './src/Screens/ScreenIndexArcitcles';
import ProfilScreen from './src/Screens/ScreenProfilPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Articles" component={IndexArticleScreen} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}