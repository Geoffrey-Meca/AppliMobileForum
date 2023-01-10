import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

import LandingScreen from './src/Screens/ScreenHome';
import ProfilScreen from './src/Screens/ScreenProfilPage';
import IndexArticleScreen from './src/Screens/ScreenIndexArticles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  async function checkJWT(){
    const token = await SecureStore.getItemAsync('jwt');
    if(token != null){
      console.log(`Heure limite Token: ${new Date(jwt_decode(token).exp * 1000)}`)
      console.log(`Heure actuelle: ${new Date(Date.now())}`)
    }
    if(token == null){
      console.log('Token absent');
      return false
    }
    else if (jwt_decode(token).exp * 1000 > Date.now()){
      console.log('Token valide')
      return true
    }
    else{
      // await SecureStore.deleteItemAsync('jwt')
      console.log('Token invalide')
      return false
    }
  }
  /*useEffect(() => {
      async function getJWT() {
          const token = await SecureStore.getItemAsync('jwt');
          if (token) {
            console.log(jwt_decode(token))
            console.log(token)
            setJWT(token);
          }
          else{
            console.log('pas de token')
          }
        }
      getJWT();
  }, []);*/
  console.log(checkJWT())

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