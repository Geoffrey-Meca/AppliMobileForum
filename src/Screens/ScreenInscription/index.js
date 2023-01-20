import React from 'react'
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native'
import BoutonApp from '../../Composants/Bouton'
import Footer from '../../Composants/Footer';
import Header from '../../Composants/Header'


export default function InscriptionScreen({ navigation }) {
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const emailRegex = /^\S+@\S+\.\S+$/;
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
        if(emailRegex.test(newEmail)){
            postUser(newEmail, newFirstName, newLastName, newPassword, (res => {
                if(res.status != 201){
                    Alert.alert(`Impossible de crée l'utilisateur`, `${res.data.violations[0].message}`, [{
                        style: 'cancel'
                    }])
                }
                else{
                    login(newEmail, newPassword, (res => {
                        if(res.status != 200){
                            Alert.alert(`Connexion automatique échoué, veuillez vous connecter`, `${res.data.message}`, [{
                                style: 'cancel'
                            }])
                        }
                        else{
                            navigation.navigate('Articles')
                        }
                    }))
                }
            }));
        }
        else{
            Alert.alert('E-mail invalide', 'Veuillez entrer un e-mail valide pour continuer')
        }
    };
    return (
        <View style={styles.container}>
            <Header nav={navigation} />
            <View style={styles.inscriptionContainer}>
                <View style={styles.formContainer}></View>
                <Text style={styles.title}>Inscription</Text>
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
                <Footer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    inscriptionContainer: {
        width: "100%",
        height: "100%",
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '80 %',
        height: 42,
        margin: '5%',
        padding: 5
    },
})