import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import BoutonApp from '../../Composants/Bouton'
import { getMe } from '../../../api';
import Header from '../../Composants/Header'
import clearCache from 'react-native-clear-cache';


import { login } from '../../../api';
// Faire la logique/

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
    console.log(user.userId)
    console.log(user.role)
    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <ScrollView style={{ marginBottom: "15%", width: "100%" }}>
                <Text style={styles.title}>Profile</Text>
                <View style={styles.contenerLeft}>
                    <Text style={styles.txt}>Email: {user.email}
                    </Text>
                    <Text style={styles.txt}>
                        FirstName: {user.firstname}
                    </Text>
                    <Text style={styles.txt}>
                        LastName: {user.lastname}
                    </Text>
                    <Text style={styles.txt}>
                        Rôle:
                    </Text>
                </View>
                <Text style={styles.titleH2}>Modifier votre profile</Text>
                <View style={styles.contenerLeft}>
                    <Text style={styles.txt}>Email:</Text>
                    <Text style={styles.txt}>Password:</Text>
                    <Text style={styles.txt}>FirstName:</Text>
                    <Text style={styles.txt}>LastName:</Text>
                </View>
                <BoutonApp text="Modifier" />
                <BoutonApp text="Supprimer" />
            </ScrollView>
        </SafeAreaView >
    )
}
