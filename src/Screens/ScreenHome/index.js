import React from 'react'
import { Text, StyleSheet } from 'react-native'
import BoutonApp from '../../Composants/Bouton'

export default function LandingScreen() {
    return (
        <>
            <Text style={styles.txt}>Bienvenue sur CODEHUB, il est temps de se mettre au boulot !</Text>
            <BoutonApp text="Visiter le Forum" />
            <BoutonApp text="Connexion" />
            <BoutonApp text="Inscription" />
        </>
    )
}
const styles = StyleSheet.create({
    txt: {
        fontSize: 40
    }
})