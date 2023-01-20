import React from 'react'
import { useState } from 'react'
import { TextInput, StyleSheet, View, Text, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../../../api';
import BoutonApp from '../../Composants/Bouton'
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
                    navigation.navigate('Articles')
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
                <BoutonApp text="Connexion"
                    onPress={handleSubmit}
                />
            </View>
        </SafeAreaView>
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
        width: "80%",
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
        height: "12%",
        margin: '5%',
        paddingLeft: 15,
    },
})