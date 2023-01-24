import React, { useState, useEffect } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../../../assets/styles/styles'

// import * as SecureStore from 'expo-secure-store'

import { isLogged, isAdmin, logOut } from '../../../lib'

export default function CustomDrawer(props) {

    let Admin = isAdmin()
    let isLog = isLogged()

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.header}>
                    <View style={styles.OneLine}>
                        <Text style={styles.headerTxt}></Text>
                        <Text style={styles.headerTxt}></Text>
                    </View>
                    <Image style={styles.imgDrawer} source={require('../../../assets/Pictures/320px-Emblème_de_l\'Ordre_Jedi..png')} />
                </View>
                <View style={styles.linkText}>

                    <DrawerItem label={'Home'} onPress={() => props.navigation.navigate('Home')} />
                    <DrawerItem label={'Articles'} onPress={() => props.navigation.navigate('Articles')} />
                    <DrawerItem label={'Profil'} onPress={() => props.navigation.navigate('Profil')} />
                    {isLog && <DrawerItem label={'Ajouter un article'} onPress={() => props.navigation.navigate('AddArticle')} />}
                    {!isLog && <DrawerItem label={'Connexion'} onPress={() => props.navigation.navigate('Connexion')} />}
                    {!isLog && <DrawerItem label={'Inscription'} onPress={() => props.navigation.navigate('Inscription')} />}
                    {Admin && < DrawerItem label={'Admin'} onPress={() => props.navigation.navigate('AdminScreen')} />}
                </View>

            </DrawerContentScrollView >
            <TouchableOpacity style={styles.footer} onPress={{}}>
                {isLog && <Text>Deconnexion</Text>}
            </TouchableOpacity>
        </View >
    )
}