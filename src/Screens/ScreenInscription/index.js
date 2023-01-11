import React from 'react'
import { useState} from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BoutonApp from '../../Composants/Bouton'
import Footer from '../../Composants/Footer';


export default function InscriptionScreen(props) {
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
        setUser(newEmail, newFirstName, newLastName, newPassword, (res => {
            console.log(res)
        }));
      };
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.container}>

            <View style={styles.formContainer}></View>
                <Text style={styles.title}>Inscription</Text>
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
    <Footer/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "#0077B6",
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