import React, { useState } from 'react'
import { TextInput, View, Text, Pressable, Alert, ScrollView } from 'react-native'
import { login } from '../../../api';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import styles from '../../../assets/styles/styles'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function ModalConnexion(props) {
    const [user, setUser] = useState('');
    const emailRegex = /^\S+@\S+\.\S+$/;

    const handleSubmit = () => {
        if (emailRegex.test(user.email)) {
            login(user.email, user.password, (res => {
                if (res.status != 200) {
                    Alert.alert(`Erreur`, `${res.data.message}`)
                }
                else {
                    setUser('')
                    props.nav.navigate('Articles', { refresh: true })
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
                <Text style={styles.closeBtn}><Ionicons name="md-close-sharp" size={24} color="black" /></Text>
            </Pressable>
            <ScrollView>

                <View style={styles.formContainer}>
                    <Text style={styles.titleH3}>Identifiez-vous</Text>
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
          
                <ButtonComponent
                    contButon={styles.contenerCenter}
                    button={styles.butonStyle}
                    txtButton={styles.textButon}
                    text={<AntDesign name="login" size={24} color="black" />}
                    onPress={handleSubmit}
                />
                </View>
            </ScrollView>
        </View>
    )
}