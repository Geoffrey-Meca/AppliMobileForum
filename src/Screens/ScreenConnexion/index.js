import React from 'react'
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { useState } from 'react'
import { TextInput, View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../../../api';

import Header from '../../Composants/Header'

export default function ConnexionScreen({ navigation }) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const onChangeEmail = (val) => {
        setNewEmail(val)
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
                    navigation.navigate('Articles', { refresh: true })
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
            <Text style={styles.title}>Identifiez-vous</Text>
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
          
            <ButtonComponent 
                contButon={styles.contenerCenter}
                button={styles.butonStyle}
                txtButton={styles.textButon}
                text={"Connexion"}
                onPress={handleSubmit}
            />
            </View>
        </SafeAreaView>
    )
}
