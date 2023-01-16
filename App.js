import React, { useEffect, useState } from 'react';
import LandingScreen from './src/Screens/ScreenHome';
import ProfilScreen from './src/Screens/ScreenProfilPage';
import IndexArticleScreen from './src/Screens/ScreenIndexArticles';
import ReadArticle from './src/Screens/ScreenIndexArticles/readArticle';
// Importation de la page d'inscription
import InscriptionScreen from './src/Screens/ScreenInscription';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnexionScreen from './src/Screens/ScreenConnexion';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Articles" component={IndexArticleScreen} />
        <Stack.Screen name="ReadArticle" component={ReadArticle} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Connexion" component={ConnexionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}