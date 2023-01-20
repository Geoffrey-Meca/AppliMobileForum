import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store'
import { Alert } from 'react-native';

const isLogged = () => {
    const [isLogged, setIsLogged] = useState(false);

    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('jwt')

      if (token) {
          setIsLogged(true);
      } else {  
          setIsLogged(false);
      }
    };
    useEffect(() => {
      checkAuth()
    }, [checkAuth]);

    return isLogged
}
const logOut = () => {
  Alert.alert(
    "Vous êtes sur le point de vous déconnecter",
    "Êtes-vous sur de vouloir procéder ?",
    [
        {
            text: "Non",
        },
        {
            text: "Oui", onPress: () => {
                SecureStore.deleteItemAsync('jwt').then(
                    console.log('Déconnexion'),
                )
            }
        }
    ]
);
}
module.exports = { 
  isLogged,
  logOut
  }