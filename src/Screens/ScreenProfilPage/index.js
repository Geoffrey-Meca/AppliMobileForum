import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, ScrollView, Alert, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { getMe, deleteUser, editUser } from '../../../api';
import Header from '../../Composants/Header'
import { logOut } from '../../../lib'

export default function ProfilScreen({ navigation }) {

    const [refreshing, setRefreshing] = React.useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            getMe((res) => {
                setUser(res.data);
            });
        };
        fetchData();
    }, []);

    const editProfilUser = () => {
        editUser(user.id, user.email, user.firstname, user.lastname, user.password, (res => {
            if (res.status == 200) {
                Alert.alert('Vos modifications ont bien été prise en compte')
            } else {
                Alert.alert('Il y a eu un probleme ! Désolé')
            }
        }))
    }

    const removeUser = () => {
        deleteUser(user.id, (res => {
            if (res.status == 204) {
                Alert.alert('Votre profile a bien était supprimé')
                logOut(navigation)
            } else {
                Alert.alert('Erreur')
            }
        }))
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
            <ScrollView style={{ marginBottom: "15%", width: "100%" }} refreshControl={
                <RefreshControl refreshing={refreshing}
                    onRefresh={onRefresh} />
            }>

                <Text style={styles.title}>Profile</Text>
                <View style={styles.contenerLeft}>
                    <Text style={styles.txt}>Email: {user.email}
                    </Text>
                    <Text style={styles.txt}>
                        FirstName: {user.firstname}
                    </Text>
                    <Text style={styles.txt}>
                        LastName: {user.lastname}
                    </Text>
                    <Text style={styles.txt}>
                        Rôle: {user.roles}
                    </Text>
                </View>
                <Text style={styles.titleH2}>Modifier votre profile</Text>
                <View style={styles.contenerLeft}>
                    <Text style={styles.txt}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, email: txt })}
                        value={user ? user.email : ""}
                        placeholder='newEmail'
                    />
                    <Text style={styles.txt}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, password: txt })}
                        value={user ? user.password : ""}
                        placeholder='newPassword'
                        secureTextEntry={true}
                    />
                    <Text style={styles.txt}>FirstName:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, firstname: txt })}
                        value={user ? user.firstname : ""}
                        placeholder='newFirstName'
                    />
                    <Text style={styles.txt}>LastName:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({ ...user, lastname: txt })}
                        value={user ? user.lastname : ""}
                        placeholder='newLastName'
                    />
                </View>
                <ButtonComponent
                    contButon={styles.contenerCenter}
                    button={styles.butonStyle}
                    txtButton={styles.textButon}
                    text={"Modifier"}
                    onPress={editProfilUser}
                />
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