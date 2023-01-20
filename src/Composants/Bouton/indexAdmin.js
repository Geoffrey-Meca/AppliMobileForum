import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function BoutonAdmin(props) {

    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={props.onPress}>
                <Text style={styles.txt}>{props.text}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin:10
    },
    btn: {
        height: 35,
        width:100,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#CAF0F8",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "5%",
    },
    txt: {
        textAlign: "justify",
        fontSize: 20,
    }
})