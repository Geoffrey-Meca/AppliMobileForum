import React from 'react'
import { Text, StyleSheet, View } from 'react-native';


const today = new Date();
const year = today.getFullYear();

export default function Footer() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Copyright {year}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        height: "10%",
        width: "100%",
        backgroundColor: "#0096C7",
    },
    text: {
        textAlign: "center",
        color: "#FFFFFF"
    }
})