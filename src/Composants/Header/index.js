import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Burger from '../Burger';

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octotre", "Novembre", "Decembre"]

export default function Header(props) {

    const date = new Date()

    return (
        <View style={styles.container}>
            <Burger nav={props.nav} />

            <Text style={styles.txt}>{`${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`}
            </Text>

            <Image
                style={styles.img}
                source={require("../../../assets/Logo/logoHeader.webp")}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "12%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0096C7",
        paddingHorizontal: "3%",
        zIndex: 1
    },
    txt: {
        color: "#fff",
        fontFamily: 'Iceland_400Regular',
        fontSize: 17
    },
    img: {
        width: "20%",
        height: "80%",
    }
})