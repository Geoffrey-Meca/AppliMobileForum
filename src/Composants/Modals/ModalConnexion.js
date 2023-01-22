import React, { useState } from 'react'
import { TextInput, View, Text, Pressable, Alert, ScrollView } from 'react-native'
import { login } from '../../../api';

import BoutonApp from '../Bouton'
import styles from '../../../assets/styles/styles'


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
                    props.onClose()
                }
            }));
        }
        else {
            Alert.alert('E-mail invalide', 'Veuillez entrer un e-mail valide pour continuer')
        }
    };
    return (
        <View style={styles.modalContainer}>
            <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
                <Text style={styles.closeBtn}>X</Text>
            </Pressable>
            <ScrollView>

                <View style={styles.formContainer}>
                    <Text style={styles.titleModal}>Identifiez-vous</Text>
                    <TextInput
                        style={styles.inputModal}
                        onChangeText={onChangeEmail}
                        value={newEmail}
                        placeholder='Email'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.inputModal}
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