import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function BoutonApp(props) {

    return (
        <View style={styles.container}>
            <Pressable style={styles.btn}>
                <Text style={styles.txt}>{props.text}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    btn: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#CAF0F8",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,

        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0,
        shadowRadius: 16.00,

        elevation: 24,
    },
    txt: {
        fontSize: 20,
    }
})