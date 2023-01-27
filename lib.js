import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode';

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

const isAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const checkAdmin = async () => {
        const token = await SecureStore.getItemAsync('jwt')
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
    };
    useEffect(() => {
        checkAdmin()
    }, [checkAdmin]);

    return isAdmin;
}


function logOut(navigation) {
    SecureStore.deleteItemAsync('jwt').then(
        navigation.navigate('Home')
    )
}

module.exports = {
    isLogged,
    isAdmin,
    logOut
}