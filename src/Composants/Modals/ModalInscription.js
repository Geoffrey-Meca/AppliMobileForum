//import React, { useState } from 'react'
import React from 'react';
import { useState} from 'react';
import { TextInput, StyleSheet, View, Text, Pressable, Alert } from 'react-native'
import { postUser, login } from '../../../api';

import BoutonApp from '../Bouton'

export default function ModalInscription(props) {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")

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
    const emailRegex = /^\S+@\S+\.\S+$/;
    const handleSubmit = async () => {
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
                            Alert.alert(`Connexion automatique échoué, veuillez vous connecter`, `${res.data.violations[0].message}`, [{
                                style: 'cancel'
                            }])
                        }
                        else{
                            props.nav.navigate('Articles')
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
            <Pressable onPress={props.onPress}>
                <Text style={styles.closeBtn}>X</Text>
            </Pressable>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Inscrivez-vous</Text>
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#023E8A",
        width: "100%",
        height: 500,
        top: "30%"
    },
    closeBtn: {
        backgroundColor: "grey",
        textAlign: "center",
        fontSize: 25,
        width: 30,
        height: 30,
        top: 0,
        left: "92%"
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 20
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