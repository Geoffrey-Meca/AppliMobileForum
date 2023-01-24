import React from 'react';
import { Image, Text, View } from 'react-native';
import Burger from '../Burger';
import styles from '../../../assets/styles/styles'

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octotre", "Novembre", "Decembre"]

export default function Header(props) {

    const date = new Date()

    return (
        <View style={styles.headerContainer}>
            <Burger nav={props.nav} />

            <Text style={styles.txtDate}>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}
            </Text>

            <Image
                style={styles.imgHeader}
                source={require("../../../assets/Logo/logoHeader.webp")}
            />
        </View>
    )
}