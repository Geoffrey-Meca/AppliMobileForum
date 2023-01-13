import React from 'react'
import { Image, StyleSheet, View, Pressable, Text } from 'react-native'

export default function Burger(props) {
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <Image
                    style={styles.img}
                    source={require("../../../assets/Burger/close_FILL0_wght400_GRAD0_opsz48.png")}
                />
            </Pressable>
            <View style={styles.linksContainer}>

                <Text style={styles.txt}>COUCOUCOUCOU</Text>
                <Text style={styles.txt}>COUCOUCOUCOU</Text>
                <Text style={styles.txt}>COUCOUCOUCOU</Text>
                <Text style={styles.txt}>COUCOUCOUCOU</Text>
                <Text style={styles.txt}>COUCOUCOUCOU</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        width: "70%",
        height: 650,
        top: "0.5%",
        backgroundColor: "#ADE8F4",
        position: "absolute",
        zIndex: 1
    },
    img: {
        // backgroundColor: "green"
    },
    linksContainer: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        color: "#fff",
    }
})