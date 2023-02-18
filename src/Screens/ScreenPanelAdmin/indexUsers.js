import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUsers, deleteUser } from '../../../api';
import Header from '../../Composants/Header';

import { useRoute } from '@react-navigation/native';

import Pagination from '../../Composants/Pagination';
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



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
    }, [page, refresh]);

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Liste des utilisateurs"}</Text>
            <ScrollView>
                {users ? (users['hydra:member'].map((item, index) => (
                    <View style={styles.OneLineAdmin} key={index}>
                    <View style={styles.box} key={index}>
                        <View style={styles.infoUserAdmin}>
                            <View style={styles.contenerLeft}>
                                <Text style={styles.linkUserAdmin} >{item.firstname} {item.lastname}</Text>

                                <Text style={styles.linkUserAdmin} >{item.email}</Text>
                            </View>
                        
                            <ButtonComponent
                                contButon={styles.contenerCenter}
                                button={styles.butonStyleIcon}
                                txtButton={styles.textButon}
                                text={<FontAwesome name="pencil" size={25} color="black" />}
                                onPress={() => navigation.navigate('User', { userId: item.id, refresh: true })}
                            />
                            <ButtonComponent
                                contButon={styles.contenerCenter}
                                button={styles.butonDangerous}
                                txtButton={styles.textButon}
                                text={<AntDesign name="deleteuser" size={25} color="black" />}
                                onPress={() =>
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
                                                    navigation.navigate('Users', { refresh: true });
                                                }),
                                            },
                                        ],
                                    )}
                            />

                        
                       
                        </View>
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