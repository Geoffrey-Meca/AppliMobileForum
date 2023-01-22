import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUserById, patchUser } from '../../../api';
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';
import { ScrollView } from 'react-native-gesture-handler';



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
        <View style={styles.formContainer}>

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

          <View style={styles.btn}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0077B6",
  },
  formContainer: {
    width: "100%",
    alignItems: "center"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    margin: 30,
    fontFamily: 'Iceland_400Regular',
    textAlign: "center"
  },
  label: {
    color: "#fff",
    fontSize: 18,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    width: '80 %',
    height: "8%",
    margin: '5%',
    paddingLeft: 15
  },
  btn: {
    flexDirection: "row",
    marginBottom: "25%"
  }
})