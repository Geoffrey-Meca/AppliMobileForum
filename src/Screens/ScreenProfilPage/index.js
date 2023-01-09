import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProfilScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            <View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    title: {
        fontSize: 40,
        margin: 50,
    },
    txt: {
        fontSize: 20,
        width: "70%",
        marginTop: 20
    }
})