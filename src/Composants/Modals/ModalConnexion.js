import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native'

import BoutonApp from '../Bouton'


export default function ModalConnexion(props) {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const onChangeEmail = (val) => {
        setNewEmail(val)
    }
    const onChangePassword = (val) => {
        setNewPassword(val)
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <Text style={styles.closeBtn}>X</Text>
            </Pressable>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Identidiez-vous</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={newEmail}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={newPassword}
                    placeholder='Password'
                />
                <BoutonApp text="Connexion" />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#023E8A",
        width: "100%",
        height: 600,
        top: "50%"
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
        backgroundColor: "#fff",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '70 %',
        height: 40,
        margin: 10
    },
})