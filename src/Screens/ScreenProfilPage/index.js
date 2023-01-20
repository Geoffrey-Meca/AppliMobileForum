import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import BoutonApp from '../../Composants/Bouton'
import { getMe } from '../../../api';
import Header from '../../Composants/Header'
import Footer from '../../Composants/Footer';

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
            <Header nav={navigation} />
            <ScrollView style={{ marginBottom: "15%", width: "90%" }}>
                <Text style={styles.title}>Profile</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.txt}>Email: {user.email}</Text>
                    <Text style={styles.txt}>FirstName: {user.firstname}</Text>
                    <Text style={styles.txt}>LastName: {user.lastname}</Text>
                    <Text style={styles.txt}>Rôle: </Text>
                </View>
                <Text style={styles.titleH2}>Modifier votre profile</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.txt}>Email:</Text>
                    <Text style={styles.txt}>Password:</Text>
                    <Text style={styles.txt}>FirstName:</Text>
                    <Text style={styles.txt}>LastName:</Text>
                </View>
                <BoutonApp text="Modifier" />
                <BoutonApp text="Supprimer" />
            </ScrollView>
            <Footer />
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
        marginHorizontal: "5%",
        marginBottom: "3%"
    },
    title: {
        color: '#FFFFFF',
        fontSize: 45,
        marginTop: 30,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    titleH2: {
        color: '#FFFFFF',
        fontSize: 35,
        margin: 15,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    txt: {
        color: "#fff",
        fontSize: 20,
        marginTop: 20
    }
})