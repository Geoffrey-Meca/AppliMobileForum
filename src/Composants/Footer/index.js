import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

const today = new Date();
const year = today.getFullYear();

export default function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
        (year == 2023 ? (
            <View style={styles.container}>
                <Text style={styles.text}>Copyright {year}</Text>
            </View>
        ) : (
            <View style={styles.container}>
                <Text style={styles.text}>Copyright 2023 - {year}</Text>
            </View>
        ))
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        bottom: "0%",
        justifyContent: "center",
        height: "5%",

        width: "100%",
        backgroundColor: "#0096C7",
    },
    text: {
        textAlign: "center",
        color: "#FFFFFF"
    }
})