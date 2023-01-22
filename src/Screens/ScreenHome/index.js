import React, { useState } from 'react'

import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalConnexion from '../../Composants/Modals/ModalConnexion';
import ModalInscription from '../../Composants/Modals/ModalInscription';
import styles from '../../Composants/styles/styles';

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
            <ButtonComponent 
                contButon={styles.contenerCenter}
                button={styles.butonStyle}
                txtButton={styles.textButon}
                text={"Entrer"}
                onPress={() => navigation.navigate('Articles')}
            />
            <ButtonComponent 
                contButon={styles.contenerCenter}
                button={styles.butonStyle}
                txtButton={styles.textButon}
                text={"Connexion"}
                onPress={_toggleFormConnexion}
            />
            <ButtonComponent 
                contButon={styles.contenerCenter}
                button={styles.butonStyle}
                txtButton={styles.textButon}
                text={"Inscription"}
                onPress={_toggleFormInscription}
            />
            {isFormConnexionVisible && <ModalConnexion onPress={_toggleFormConnexion} onClose={_toggleFormConnexion} nav={navigation} />}
            {isFormInscriptionVisible && <ModalInscription onPress={_toggleFormInscription} onClose={_toggleFormInscription} nav={navigation} />}
            <StatusBar style="light" />
            </ScrollView>
        </SafeAreaView>
    )
}