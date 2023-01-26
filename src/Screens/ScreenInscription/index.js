import React from 'react'
import { useState } from 'react';
import { Alert, View, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Composants/Header'
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { postUser, login } from '../../../api';

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
                            Alert.alert('Votre inscription a bien été prise en compte', 'Bienvenue sur le Forum !')
                            navigation.navigate('Articles', { refresh: true })
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
            <ScrollView>
                <Text style={styles.title}>Inscription</Text>
                <View style={styles.contenerCenter}>
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
                        text={"Inscription"}
                        onPress={handleSubmit}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

