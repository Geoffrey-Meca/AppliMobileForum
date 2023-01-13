import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BoutonApp from '../../Composants/Bouton'
import { getMe } from '../../../api';

export default function ProfilScreen({ navigation }) {

    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            getMe((res) => {
                setUser(res.data);
            });
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.txt}>Email: {user.email}</Text>
                <Text style={styles.txt}>FirstName: {user.firstname}</Text>
                <Text style={styles.txt}>LastName: {user.lastname}</Text>
                <Text style={styles.txt}>Rôle: </Text>
            </View>
            <Text style={styles.title}>Modifier votre profile</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.txt}>Email:</Text>
                <Text style={styles.txt}>Password:</Text>
                <Text style={styles.txt}>FirstName:</Text>
                <Text style={styles.txt}>LastName:</Text>
            </View>
            <BoutonApp text="Modifier" />
            <BoutonApp text="Supprimer compte" />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    inputContainer: {
        width: "70%",
        margin: 10
    },
    title: {
        color: "#fff",
        fontSize: 40,
        marginTop: 30,
    },
    txt: {
        color: "#fff",
        fontSize: 20,
        width: "70%",
        marginTop: 20
    }
})