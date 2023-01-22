import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUsers, deleteUser } from '../../../api';
import Header from '../../Composants/Header';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import { useRoute } from '@react-navigation/native';
import Pagination from '../../Composants/Pagination';


export default function IndexUsersScreen({ navigation }) {

    const [users, setUsers] = useState('');
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const maxItems = 5;
    const route = useRoute();
    const refresh = route.params;

    const fetchData = () => {
        getUsers(page, (res) => {
            setUsers(res.data);
            setTotalItems(res.data['hydra:totalItems']);
        });
    }
    useEffect(() => {
        fetchData();
        if ({ "refresh": true }) { fetchData() }
    }, [page, route, refresh]);

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Liste des utilisateurs"}</Text>
            <ScrollView style={{ width: "100%" }}>
                {users ? (users['hydra:member'].map((item, index) => (
                    <View style={styles.pageContainer} key={index}>
                        <Text style={{ color: "#fff", fontSize: 25, paddingBottom: "5%", fontFamily: 'Iceland_400Regular' }} >User: {item.id}</Text>
                        <View style={styles.infoUser}>
                            <Text style={styles.linkUser} >{item.firstname} {item.lastname} : </Text>
                            <Text style={styles.linkUser} >{item.email}</Text>
                        </View>
                        <View style={styles.btna} >
                            <BoutonAdmin text="Modifier" onPress={() => navigation.navigate('User', { userId: item.id })} />
                            <BoutonAdmin text="Supprimer" onPress={() =>
                                Alert.alert(
                                    "Vous êtes sur le point de supprimer l'utilisateur",
                                    "Êtes-vous sur de vouloir procéder ?",
                                    [
                                        {
                                            text: "Non",
                                        },
                                        {
                                            text: 'Oui',
                                            onPress: () => deleteUser(item.id, (res) => {
                                                console.log(res.data);
                                                navigation.navigate('Users', { refresh: true });
                                            }),
                                        },
                                    ],
                                )}
                            />
                        </View>
                    </View>
                ))
                ) : (
                    <Text>Loading...</Text>
                )}
                <Pagination
                    fetchData={fetchData}
                    page={page}
                    setPage={setPage}
                    totalItems={totalItems}
                    maxItems={maxItems}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        margin: 30,
        fontFamily: 'Iceland_400Regular'
    },
    pageContainer: {
        justifyContent: "space-around"
    },
    infoUser: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    linkUser: {
        color: "#FFFFFF",
        fontSize: 15,
    },
    pagination: {
        flexDirection: "row",
        margin: 50,
    },
    btna: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomWidth: 1,
        marginBottom: "5%",
        paddingVertical: "5%"

    }
})