import React from 'react'
import { useState } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { login } from '../../../api';
import { SafeAreaView } from 'react-native-safe-area-context'
import BoutonApp from '../../Composants/Bouton'
import Footer from '../../Composants/Footer';
import Header from '../../Composants/Header'

export default function ConnexionScreen({ navigation }) {
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const onChangeEmail = (val) => {
        setNewEmail(val)
    }
    const onChangePassword = (val) => {
        setNewPassword(val)
    }
    const handleSubmit = () => {
        login(newEmail, newPassword, (res => {
            console.log(res)
        }));
    };

    return (
        <View style={styles.container}>
            <Header nav={navigation} />
            <View style={styles.pageContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Identifiez-vous</Text>
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
                    <BoutonApp text="Connexion"
                        onPress={handleSubmit}
                    />
                </View>
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
    pageContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
        top: 0
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