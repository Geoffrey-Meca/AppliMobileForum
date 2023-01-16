import React from 'react'
import { Image, StyleSheet, View, Pressable, Text } from 'react-native'

export default function Burger(props, { navigation }) {

    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <Image
                    style={styles.img}
                    source={require("../../../assets/Burger/close_FILL0_wght400_GRAD0_opsz48.png")}
                />
            </Pressable>
            <View style={styles.linksContainer}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.icons} />
                    <Text style={styles.txt}>Accueil</Text>

                </Pressable>
                <Pressable onPress={() => navigation.navigate('Profil')}>
                    <Image style={styles.icons} />
                    <Text style={styles.txt}>Profile</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Connexion')}>
                    <Image style={styles.icons} />
                    <Text style={styles.txt}>Connexion</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Inscription')}>
                    <Image style={styles.icons} />
                    <Text style={styles.txt}>Inscription</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Article')}>
                    <Image style={styles.icons} />
                    <Text style={styles.txt}>Articles</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Admin')}>
                    <Image style={styles.icons} />
                    <Text style={styles.txt}>Admin</Text>
                </Pressable>
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
        // width: "25%",
        // height: "25%"
    },
    icons: {

    },
    linksContainer: {
        height: "100%",
        marginTop: "15%",
        alignItems: "center",
    },
    txt: {
        color: "#fff",
        fontSize: 30,
        margin: "7%"
    }
})