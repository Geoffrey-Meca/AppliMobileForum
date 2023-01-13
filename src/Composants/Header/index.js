import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Burger from '../Burger'

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octotre", "Novembre", "Decembre"]

export default function Header() {

    const date = new Date()
    const [isOpen, setIsOpen] = useState(false)

    const _toggleBurger = () => {
        setIsOpen(!isOpen)
    }
    return (
        <View style={styles.container}>
            <Pressable style={styles.burger} onPress={_toggleBurger}>
                <Image
                    style={styles.imgBurger}
                    source={!isOpen && require("../../../assets/Burger/menu_FILL0_wght400_GRAD0_opsz48.png")}
                />
            </Pressable>
            {isOpen && <Burger onPress={_toggleBurger} />}

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
        marginTop: "13%",
        zIndex: 1
    },
    txt: {
        color: "#fff"
    },
    img: {
        width: "20%",
        height: "80%",
    },
    burger: {
        alignItems: "center",
        width: "20%",
        height: "50%",
    },
    imgBurger: {
        width: "100%",
    },
})