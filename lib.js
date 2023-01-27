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

function brassageDate(date) {
    if (date == null || date == '') {
        return false
    } else {
        let buffer = date.split('T')
        let ymd = buffer[0]
        let brassage = ymd.split('-')
        let dmy = brassage[2] + '/' + brassage[1] + '/' + brassage[0]
        return dmy
    }
}
module.exports = {
    isLogged,
    isAdmin,
    brassageDate,
    // useRefreshNavigation,
    logOut
}