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
    const [user, setUser] = useState('')

    const handleSubmit = () => {
        if (emailRegex.test(user.email)) {
            postUser(user.email, user.firstName, user.lastName, user.password, (res => {
                if (res.status != 201) {
                    Alert.alert(`Impossible de crée l'utilisateur`, `${res.data.violations[0].message}`, [{
                        style: 'cancel'
                    }])
                }
                else {
                    login(user.email, user.password, (res => {
                        if (res.status != 200) {
                            Alert.alert(`Connexion automatique échoué, veuillez vous connecter`, `${res.data.message}`, [{
                                style: 'cancel'
                            }])
                        }
                        else {
                            setUser('')
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
                        onChangeText={(txt) => setUser({ ...user, email: txt })}
                        value={user ? user.email : ''}
                        placeholder='Email'
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, password: txt })}
                        value={user ? user.password : ''}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, firstName: txt })}
                        value={user ? user.firstName : ''}
                        placeholder='FirstName'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, lastName: txt })}
                        value={user ? user.lastName : ''}
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

