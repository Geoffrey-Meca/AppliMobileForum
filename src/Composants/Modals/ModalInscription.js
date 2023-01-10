import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native'
import { setUser } from '../../../api';

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
    const handleSubmit = () => {
        setUser(newEmail, newFirstName, newLastName, newPassword, (res => {
            console.log(res)
        }));
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
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={newPassword}
                    placeholder='Password'
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
        backgroundColor: "#fff",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '70 %',
        height: 40,
        margin: 10
    },
})