import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Text, Pressable, Alert, ScrollView } from 'react-native'
import { login } from '../../../api';

import BoutonApp from '../Bouton'


export default function ModalConnexion(props) {
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const emailRegex = /^\S+@\S+\.\S+$/;

    const onChangeEmail = (val) => {
        setNewEmail(val);
    }
    const onChangePassword = (val) => {
        setNewPassword(val)
    }
    const handleSubmit = () => {
        if (emailRegex.test(newEmail)) {
            login(newEmail, newPassword, (res => {
                if (res.status != 200) {
                    Alert.alert(`Erreur`, `${res.data.message}`, [{
                        style: 'cancel'
                    }])
                }
                else {
                    setNewEmail("")
                    setNewPassword("")
                    props.nav.navigate('Articles')
                    console.log(props.onClose)
                    props.onClose
                }
            }));
        }
        else {
            Alert.alert('E-mail invalide', 'Veuillez entrer un e-mail valide pour continuer')
        }
    };
    return (
        <View style={styles.container}>
            <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
                <Text style={styles.closeBtn}>X</Text>
            </Pressable>
            <ScrollView>

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Identifiez-vous</Text>
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
                    <BoutonApp text="Connexion"
                        onPress={handleSubmit}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#023E8A",
        width: "100%",
        height: 400,
        top: "40%"
    },
    closeBtn: {
        backgroundColor: "grey",
        textAlign: "center",
        fontSize: 26,
        width: 30,
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'Iceland_400Regular'
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