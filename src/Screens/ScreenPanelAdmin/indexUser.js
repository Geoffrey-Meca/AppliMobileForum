import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUserById, patchUser } from '../../../api';
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';
import { ScrollView } from 'react-native-gesture-handler';
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
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Modifier l'utilisateur n° {userId}</Text>
        <View>

          <Text style={styles.label}>Prénom :</Text>
          <TextInput
            style={styles.inputAdmin}
            onChangeText={(txt) => setUser({ ...user, firstname: txt })}
            value={user ? user.firstname : ""}
            placeholder="Prénom"
          />

          <Text style={styles.label}>Nom :</Text>
          <TextInput
            style={styles.inputAdmin}
            onChangeText={(txt) => setUser({ ...user, lastname: txt })}
            value={user ? user.lastname : ""}
            placeholder="Nom"
          />

          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.inputAdmin}
            onChangeText={(txt) => setUser({ ...user, email: txt })}
            value={user ? user.email : ""}
            placeholder="Email"
          />

          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.inputAdmin}
            onChangeText={(txt) => setUser({ ...user, password: txt })}
            value={user ? user.password : ""}
            placeholder="Modifiez votre mot de passe"
          />

          <View style={styles.btna}>
            <BoutonAdmin text="Modifier"
              onPress={() => user.password ? editUser() :
                Alert.alert(
                  "Le champ mot de passe ne doit pas être vide")}
            />
            <BoutonAdmin text="Annuler"
              onPress={() => navigation.navigate('Users')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}