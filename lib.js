import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store'

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
module.exports = { 
  isLogged
  }