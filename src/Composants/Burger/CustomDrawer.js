import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as SecureStore from 'expo-secure-store'

import { isLogged } from '../../../useAuth'


export default function CustomDrawer(props) {

    function logOut() {
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
                            props.navigation.navigate('Home')
                        )
                    }
                }
            ]
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerTxt}>Geoffrey le BigBoss</Text>
                        <Text style={styles.headerTxt}>test@test.com</Text>
                    </View>
                    <Image style={styles.img} source={require('../../../assets/Pictures/320px-Emblème_de_l\'Ordre_Jedi..png')} />
                </View>
                <View style={styles.linkText}>

                    <DrawerItem label={'Home'} onPress={() => props.navigation.navigate('Home')} />
                    <DrawerItem label={'Articles'} onPress={() => props.navigation.navigate('Articles')} />
                    <DrawerItem label={'Profil'} onPress={() => props.navigation.navigate('Profil')} />
                    {!isLogged() && <DrawerItem label={'Connexion'} onPress={() => props.navigation.navigate('Connexion')} />}
                    {!isLogged() && <DrawerItem label={'Inscription'} onPress={() => props.navigation.navigate('Inscription')} />}
                </View>

            </DrawerContentScrollView >
            <TouchableOpacity style={styles.footer} onPress={logOut}>
                <Text>Deconnexion</Text>
            </TouchableOpacity>
        </View >
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f6f6f6",
        marginBottom: 20
    },
    img: {
        width: 60,
        height: 60,
        radius: 30
    },
    headerTxt: {
        margin: 5
    },
    linkText: {
        color: "red",
        fontSize: 30
    },
    footer: {
        position: "absolute",
        width: "100%",
        height: "10%",
        bottom: 0,
        backgroundColor: "#f6f6f6",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    hidden: {
        display: "none"
    }
})