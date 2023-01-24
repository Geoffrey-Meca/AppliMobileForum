import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function BoutonApp(props) {

    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={props.tata}>
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
    txt: {
        fontSize: 18,
        fontFamily: 'Iceland_400Regular'
    }
})