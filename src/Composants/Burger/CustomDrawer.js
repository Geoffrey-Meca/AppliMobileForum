import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.txt}>Geoffrey le BigBoss</Text>
                        <Text style={styles.txt}>test@test.com</Text>
                    </View>
                    <Image style={styles.img} source={require('../../../assets/Pictures/320px-Emblème_de_l\'Ordre_Jedi..png')} />
                </View>
                <DrawerItem label={'Home'} onPress={() => props.navigation.navigate('Home')} />
                <DrawerItem label={'Articles'} onPress={() => props.navigation.navigate('Articles')} />
                <DrawerItem label={'Profil'} onPress={() => props.navigation.navigate('Profil')} />
                <DrawerItem label={'Connexion'} onPress={() => props.navigation.navigate('Connexion')} />
                <DrawerItem label={'Inscription'} onPress={() => props.navigation.navigate('Inscription')} />

            </DrawerContentScrollView>
            <TouchableOpacity style={styles.footer}>
                <Text>Deconnexion</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f6f6f6",
        marginBottom: 20
    },
    img: {
        width: 60,
        height: 60,
        radius: 30
    },
    txt: {

    },
    footer: {
        position: "absolute",
        width: "100%",
        height: "10%",
        bottom: 0,
        backgroundColor: "#f6f6f6",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    hidden: {
        display: "none"
    }
})