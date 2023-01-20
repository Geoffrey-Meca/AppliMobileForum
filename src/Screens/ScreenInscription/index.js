import React from 'react'
import { useState } from 'react';
import { Alert, View, StyleSheet, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BoutonApp from '../../Composants/Bouton'
import Footer from '../../Composants/Footer';
import Header from '../../Composants/Header'


export default function InscriptionScreen({ navigation }) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const onChangeEmail = (val) => {
        setNewEmail(val)
    }
    const onChangePassword = (val) => {
        setNewPassword(val)
    }
    const onChangeFirstName = (val) => {
        setNewFirstName(val)
    }
    const onChangeLastName = (val) => {
        setNewLastName(val)
    }
    const handleSubmit = () => {
        if (emailRegex.test(newEmail)) {
            postUser(newEmail, newFirstName, newLastName, newPassword, (res => {
                if (res.status != 201) {
                    Alert.alert(`Impossible de crée l'utilisateur`, `${res.data.violations[0].message}`, [{
                        style: 'cancel'
                    }])
                }
                else {
                    login(newEmail, newPassword, (res => {
                        if (res.status != 200) {
                            Alert.alert(`Connexion automatique échoué, veuillez vous connecter`, `${res.data.message}`, [{
                                style: 'cancel'
                            }])
                        }
                        else {
                            navigation.navigate('Articles')
                        }
                    }))
                }
            }));
        }
        else {
            Alert.alert('E-mail invalide', 'Veuillez entrer un e-mail valide pour continuer')
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>Inscription</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={newEmail}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={newPassword}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeFirstName}
                    value={newFirstName}
                    placeholder='FirstName'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLastName}
                    value={newLastName}
                    placeholder='LastName'
                />
                <BoutonApp text="Inscription"
                    onPress={handleSubmit}
                />
            </View>
            <Footer />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    formContainer: {
        alignItems: 'center',
        width: "80%"
    },
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        margin: 30,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    input: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '80 %',
        height: "9%",
        margin: '5%',
        paddingLeft: 15,
    },
})