import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store'

export default isLogged = () => {
    const [isLogged, setIsLogged] = useState(false);
  
    const checkAuth = async () => {
      SecureStore.getItemAsync('jwt').then((token) => {
        if (token) {
          setIsLogged(true);
      } else {  
          setIsLogged(false);
      }
      });
    };
  
    useEffect(() => {
      checkAuth()
    }, [checkAuth]);

    return isLogged;
}