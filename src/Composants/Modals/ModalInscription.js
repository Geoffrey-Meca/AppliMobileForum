import React from 'react';
import { useState } from 'react';
import { TextInput, View, Text, Pressable, Alert, ScrollView } from 'react-native'
import { postUser, login } from '../../../api';
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { Ionicons } from '@expo/vector-icons';


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
                            props.onClose()
                            setNewEmail("")
                            setNewPassword("")
                            setNewLastName("")
                            setNewFirstName("")
                            props.nav.navigate('Articles', { refresh: true })
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
        <View style={styles.modalContainer}>
            <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
                <Text style={styles.closeBtn}><Ionicons name="md-close-sharp" size={24} color="black" /></Text>
            </Pressable>
            <ScrollView>

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
                    <ButtonComponent
                        contButon={styles.contenerCenter}
                        button={styles.butonStyle}
                        txtButton={styles.textButon}
                        text={<Ionicons name="person-add" size={24} color="black" />}
                        onPress={handleSubmit}
                    />
                </View>
            </ScrollView>
        </View>
    )
}