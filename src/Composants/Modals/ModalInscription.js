import React from 'react';
import { useState } from 'react';
import { TextInput, View, Text, Pressable, Alert, ScrollView } from 'react-native'
import { postUser, login } from '../../../api';
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { Ionicons } from '@expo/vector-icons';


export default function ModalInscription(props) {

    const [user, setUser] = useState('');

    const emailRegex = /^\S+@\S+\.\S+$/;
    const handleSubmit = async () => {
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
                            props.onClose()
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
        <View style={styles.modalContainer}>
            <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
                <Text style={styles.closeBtn}><Ionicons name="md-close-sharp" size={24} color="black" /></Text>
            </Pressable>
            <ScrollView>

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Inscrivez-vous</Text>
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
                        text={<Ionicons name="person-add" size={24} color="black" />}
                        onPress={handleSubmit}
                    />
                </View>
            </ScrollView>
        </View>
    )
}