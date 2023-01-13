import React, { Fragment, useEffect, useState } from 'react'

import { Text, StyleSheet, Image, View, ScrollView, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import BoutonApp from '../../Composants/Bouton'
import ModalConnexion from '../../Composants/Modals/ModalConnexion';
import ModalInscription from '../../Composants/Modals/ModalInscription';
import * as SecureStore from 'expo-secure-store'

export default function LandingScreen({ navigation }) {

    const [isLogged, setLogging] = useState(false);
    const [isFormConnexionVisible, setIsFormConnexionVisible] = useState(false)
    const [isFormInscriptionVisible, setIsFormInscriptionVisible] = useState(false)

    useEffect(() => {
        const checkAuth = () => {
            SecureStore.getItemAsync('jwt').then((token) => {
                if (token) {
                    setLogging(true);
                } else {
                    setLogging(false)
                }
            })
        }
        checkAuth()
    }, [])

    const _toggleFormConnexion = () => {
        setIsFormConnexionVisible(!isFormConnexionVisible)
    }
    const _toggleFormInscription = () => {
        setIsFormInscriptionVisible(!isFormInscriptionVisible)
    }

    function logout() {
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
                            setLogging(false)
                        )
                    }
                }
            ]
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require('../../../assets/Logo/LogoAlternative45.webp')}
                    />
                </View>
                <Text style={styles.txt}>Bienvenue sur CODEHUB, il est temps de se mettre au boulot !</Text>
                <BoutonApp text="Visiter le Forum" onPress={() => navigation.navigate('Articles')} />

                {isLogged ? (
                    <Fragment>
                        <BoutonApp text="Profile" onPress={() => navigation.navigate('Profil')} />
                        <BoutonApp text="Déconnexion" onPress={logout} />
                    </Fragment>
                ) : (
                    <Fragment>
                        <BoutonApp text="Connexion" onPress={_toggleFormConnexion} />
                        <BoutonApp text="Inscription" onPress={_toggleFormInscription} />
                    </Fragment>
                )}
                {isFormConnexionVisible && <ModalConnexion onPress={_toggleFormConnexion} />}
                {isFormInscriptionVisible && <ModalInscription onPress={_toggleFormInscription} />}
                <StatusBar style="light" />
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0077B6",
    },
    imgContainer: {
        alignItems: "center"
    },
    txt: {
        fontSize: 30,
        backgroundColor: "#ADE8F4",
        width: "100%",
        height: 150,
        textAlign: 'center',
        marginTop: 10,

    },
    img: {
        width: "90%",
        height: 300,
        borderRadius: 30,
    },
})