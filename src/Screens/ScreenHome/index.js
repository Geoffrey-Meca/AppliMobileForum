import React, { useState } from 'react'

import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import BoutonApp from '../../Composants/Bouton'
import ModalConnexion from '../../Composants/Modals/ModalConnexion';
import ModalInscription from '../../Composants/Modals/ModalInscription';

import { useFonts, Iceland_400Regular } from '@expo-google-fonts/iceland';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';


export default function LandingScreen({ navigation }) {
    const [isFormConnexionVisible, setIsFormConnexionVisible] = useState(false)
    const [isFormInscriptionVisible, setIsFormInscriptionVisible] = useState(false)
    
    const _toggleFormConnexion = () => {
        setIsFormConnexionVisible(!isFormConnexionVisible)
    }
    const _toggleFormInscription = () => {
        setIsFormInscriptionVisible(!isFormInscriptionVisible)
    }

    let [fontsLoaded] = useFonts({
        Iceland_400Regular,
    });
    if (!fontsLoaded) {
        return null;
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
            <View style={styles.textContainer}>
                <Text style={styles.txt}>CODEHUB</Text>
            </View>
            <BoutonApp text="Entrer" onPress={() => navigation.navigate('Articles')} />

            <BoutonApp text="Connexion" onPress={_toggleFormConnexion} />
            <BoutonApp text="Inscription" onPress={_toggleFormInscription} />
            <ButtonComponent 
            contButon={styles.contenerButton}
            button={styles.butonStyle}
            txtButton={styles.textButon}
            text={"Test cONNEXION"}
            onPress={_toggleFormConnexion}
            />

            {isFormConnexionVisible && <ModalConnexion onPress={_toggleFormConnexion} onClose={_toggleFormConnexion} nav={navigation} />}
            {isFormInscriptionVisible && <ModalInscription onPress={_toggleFormInscription} onClose={_toggleFormInscription} nav={navigation} />}
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
    textContainer: {
        backgroundColor: "#ADE8F4",
        height: 150,
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 55,
        fontFamily: 'Iceland_400Regular'
    },
    img: {
        width: "90%",
        height: 300,
        borderRadius: 30,
    },
    contenerButton: {
        alignItems: "center",
        margin:10
    },
    butonStyle: {
        width: '50%',
        height: 42,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#CAF0F8",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: "5%",
    },
    textButon: {
        fontSize: 18,
        fontFamily: 'Iceland_400Regular'
    }

})
