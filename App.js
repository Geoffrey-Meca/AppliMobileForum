import 'react-native-gesture-handler';
// Importation de react
import React from 'react';
// Importation de la page d'inscription
import LandingScreen from './src/Screens/ScreenHome';
import ProfilScreen from './src/Screens/ScreenProfilPage';
import IndexArticleScreen from './src/Screens/ScreenIndexArticles';
import ConnexionScreen from './src/Screens/ScreenConnexion';
import InscriptionScreen from './src/Screens/ScreenInscription';
// Importation pour la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={LandingScreen} />
        <Drawer.Screen name="Articles" component={IndexArticleScreen} />
        <Drawer.Screen name="Profil" component={ProfilScreen} />
        <Drawer.Screen name="Connexion" component={ConnexionScreen} />
        <Drawer.Screen name="Inscription" component={InscriptionScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}