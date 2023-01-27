import React from 'react'
import { useState, useEffect } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Image, Text, TouchableOpacity, View, Alert } from 'react-native'
import styles from '../../../assets/styles/styles'
import { getMe } from '../../../api';
import { isLogged, isAdmin, logOut } from '../../../lib'

export default function CustomDrawer(props) {

    const [user, setUser] = useState("");

    const fetchData = async () => {
        isLog && getMe((res) => {
            setUser(res.data);
        });
    }
    const Admin = isAdmin()
    const isLog = isLogged()

    useEffect(() => {
        fetchData();
    }, [isLog]);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <View>
                        {isLog ?
                            (<>
                                <Text style={styles.headerTxt}>{user.firstname} {user.lastname}</Text>
                                <Text style={styles.headerTxt}>{user.email}</Text>
                            </>
                            ) :
                            (<Text style={styles.headerTxt}>Vous n'êtes pas connecté</Text>)
                        }
                    </View>
                    <Image style={styles.imgDrawer} source={require('../../../assets/Pictures/320px-Emblème_de_l\'Ordre_Jedi..png')} />
                </View>

                <View style={styles.linkText}>

                    <DrawerItem label={'Articles'} onPress={() => props.navigation.navigate('Articles', { refresh: true })} />
                    {isLog && <DrawerItem label={'Ajouter un article'} onPress={() => props.navigation.navigate('AddArticle', { refresh: true })} />}
                    {!isLog && <DrawerItem label={'Home'} onPress={() => props.navigation.navigate('Home', { refresh: true })} />}
                    {isLog && <DrawerItem label={'Profil'} onPress={() => props.navigation.navigate('Profil', { refresh: true })} />}

                    {!isLog && <DrawerItem label={'Connexion'} onPress={() => props.navigation.navigate('Connexion')} />}
                    {!isLog && <DrawerItem label={'Inscription'} onPress={() => props.navigation.navigate('Inscription')} />}
                    {Admin && < DrawerItem label={'Admin'} onPress={() => props.navigation.navigate('AdminScreen')} />}
                    <DrawerItem label={'About'} onPress={() => props.navigation.navigate('About')} />
                </View>

            </DrawerContentScrollView >
            <TouchableOpacity style={styles.footer} onPress={() => Alert.alert("Vous êtes sur le point de vous déconnecter",
                "Êtes-vous sur de vouloir procéder ?", [
                { text: "Non" },
                { text: "Oui", onPress: () => { logOut(props.navigation) } }
            ])}>
                {isLog && <Text>Deconnexion</Text>}
            </TouchableOpacity>
        </View >

    )
}
