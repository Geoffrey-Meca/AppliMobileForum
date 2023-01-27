import { useState } from 'react';
import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode';

const isLogged = () => {
    const [isLogged, setIsLogged] = useState(false);

    SecureStore.getItemAsync('jwt').then((token) => {
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    })

    return isLogged
}

const isAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

        SecureStore.getItemAsync('jwt').then((token) => {  
        if (token) {
            const decoded = jwtDecode(token)
            if (decoded.roles.includes('ROLE_ADMIN')) {
                setIsAdmin(true)
            } else {
                setIsAdmin(false)
            }
        } else {
            setIsAdmin(false)
        }
    })

    return isAdmin;
}


function logOut(navigation) {
    SecureStore.deleteItemAsync('jwt').then(
        navigation.navigate('Home' , { refresh: true })
    )
}

module.exports = {
    isLogged,
    isAdmin,
    logOut
}