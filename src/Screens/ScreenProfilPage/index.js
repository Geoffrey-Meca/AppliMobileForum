import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, ScrollView, Alert, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { getMe, deleteUser, editUser } from '../../../api';
import Header from '../../Composants/Header';
import { logOut } from '../../../lib';
import { useRoute } from '@react-navigation/native';
import EditableText from '../../Composants/EditableText';

export default function ProfilScreen({ navigation }) {

    const [refreshing, setRefreshing] = React.useState(false);
    const [user, setUser] = useState("");
    const [initial, setInitial] = useState("");
    let shouldLogOut = false

    const route = useRoute();
    const refresh = route.params;

    useEffect(() => {
        const fetchData = async () => {
            getMe((res) => {
                setInitial(res.data)
                setUser(res.data);
            });
        };
        fetchData();
    }, [route, refresh]);

    const logOutAlert = () => {
        Alert.alert('Vous allez être déconnecté', 'Veuillez-vous re-connecter pour voir vos modifications', [
            { text: 'Ok', onPress: () => logOut(navigation) },
        ])
    }

    const editProfilUser = (shouldLogOut) => {
        editUser(user.id, user.email, user.firstname, user.lastname, user.password, (res => {
            console.log(res.status)
            if (res.status != 200) {
                Alert.alert(`Erreur`, `${res.data.message}`,)
            } else {
                Alert.alert('Vos modifications ont bien été prise en compte')
                setInitial(user)
                shouldLogOut && logOutAlert()
            }
        }))
    }
    const removeUser = () => {
        Alert.alert('Supprimer votre compte', 'Êtes-vous sûr de vouloir supprimer votre compte ?', [
            { text: 'Oui', onPress: () => deleteUser(user.id, (res => {
                if (res.status != 204) {
                    Alert.alert(`Erreur`, `${res.data.message}`,)
                } else {
                    Alert.alert('Votre profile a bien été supprimé')
                    logOut(navigation)
                }
            })) },
            { text: 'Non', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        ])
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <ScrollView style={styles.container} refreshControl={
                <RefreshControl refreshing={refreshing}
                    onRefresh={onRefresh} />
            }>
               
                <Text style={styles.titleH2}>Profile</Text>
             
                    <View style={styles.contenerProfil}>
                        <EditableText
                            label="Email"
                            value={user.email}
                            onChange={(txt) => setUser({ ...user, email: txt })}
                            onConfirm={() => editProfilUser(true)}
                            onCancel={() => setUser(initial)}
                        />
                        <EditableText
                            label="Prenom"
                            value={user.firstname}
                            onChange={(txt) => setUser({ ...user, firstname: txt })}
                            onConfirm={() => editProfilUser(false)}
                            onCancel={() => setUser(initial)}
                        />
                        <EditableText
                            label="Nom"
                            value={user.lastname}
                            onChange={(txt) => setUser({ ...user, lastname: txt })}
                            onConfirm={() => editProfilUser(false)}
                            onCancel={() => setUser(initial)}
                        />
                    </View>
        
                <Text style={styles.titleH2}>Modifier votre mot de passe</Text>
                <View style={styles.contenerLeft}>
                    <Text style={styles.txt}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, password: txt })}
                        value={user ? user.password : ""}
                        placeholder='password'
                        secureTextEntry={true}
                    />
                </View>
                <ButtonComponent
                    contButon={styles.contenerCenter}
                    button={styles.butonStyle}
                    txtButton={styles.textButon}
                    text={"Modifier"}
                    onPress={() => editProfilUser(true)}
                />
                <Text style={styles.titleH2}>Supprimer votre profile</Text>
                <ButtonComponent
                    contButon={styles.contenerCenter}
                    button={styles.butonStyle}
                    txtButton={styles.textButon}
                    text={"Supprimer"}
                    onPress={removeUser}
                />
            </ScrollView>
        </SafeAreaView >
    )
}