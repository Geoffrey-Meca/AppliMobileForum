import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Alert } from 'react-native'
import { getUsers, deleteUser } from '../../../api';
import Footer from '../../Composants/Footer';
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
        if({"refresh": true}) {fetchData()}
    }, [page,route, refresh]);

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Liste des utilisateurs"}</Text>
            <ScrollView>
                {users ? (users['hydra:member'].map((item, index) => (
                        <View key={index}>
                          <Text style={styles.linkUser} >{item.firstname} {item.lastname}                    {item.email}</Text>
                          <Text style={styles.btna} >
                          <BoutonAdmin  text="Modifier" onPress={() => navigation.navigate('User', {userId: item.id})} />
                          <BoutonAdmin  text="Supprimer" onPress={ () =>  
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
                          </Text>
                          <Text
                          style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}>
                          </Text>
                        </View>
                ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </ScrollView>
            <Pagination
                fetchData={fetchData}
                page={page}
                setPage={setPage}
                totalItems={totalItems}
                maxItems={maxItems}
            />
            <Footer />
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
        fontSize: 20,
        margin: 30,
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
        justifyContent:"center",

      }
})