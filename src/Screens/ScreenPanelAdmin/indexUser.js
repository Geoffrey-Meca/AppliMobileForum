import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUserById, patchUser } from '../../../api';
import { useRoute } from '@react-navigation/native';
import Header from '../../Composants/Header';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';

import styles from '../../../assets/styles/styles'


export default function UserProfileEditScreen({ navigation }) {

  const [user, setUser] = useState('');
  const route = useRoute();
  const userId = route.params.userId;
  const fetchData = async () => {
    getUserById(userId, (res) => {
      setUser(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, []);

  const editUser = async () => {
    patchUser(userId, user.emeil, user.firstname, user.lastname, user.password, (res => {
      console.log(res);
      Alert.alert(
        'Profil modifié',
        'Le profil de l\'utilisateur a été mis à jour avec succès.',
        [
          {
            text: 'Oui',
            onPress: () => navigation.navigate('Users', { refresh: true }),
          },
        ],
      );
    }))


  }

  return (
    <SafeAreaView style={styles.container}>
      <Header nav={navigation} />
        <Text style={styles.titleH3}>Modifier l'utilisateur n° {userId}</Text>
        <View>

          <Text style={styles.label}>Prénom :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setUser({ ...user, firstname: txt })}
            value={user ? user.firstname : ""}
            placeholder="Prénom"
          />

          <Text style={styles.label}>Nom :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setUser({ ...user, lastname: txt })}
            value={user ? user.lastname : ""}
            placeholder="Nom"
          />

          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setUser({ ...user, email: txt })}
            value={user ? user.email : ""}
            placeholder="Email"
          />

          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(txt) => setUser({ ...user, password: txt })}
            value={user ? user.password : ""}
            placeholder="Modifiez votre mot de passe"
          />

          <View style={styles.OneLine}>
            <ButtonComponent 
              contButon={styles.contenerCenter}
              button={styles.butonStyleLarge}
              txtButton={styles.textButon}
              text={"Modifier"}
              onPress={() => user.password ? editUser() :
                Alert.alert(
                  "Le champ mot de passe ne doit pas être vide")}
            />
          <ButtonComponent 
              contButon={styles.contenerCenter}
              button={styles.butonStyleLarge}
              txtButton={styles.textButon}
              text={"Annuler"}
              onPress={() => navigation.navigate('Users')}
            />
          </View>
        </View>
    </SafeAreaView >
  )
}