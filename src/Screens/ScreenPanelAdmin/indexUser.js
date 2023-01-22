import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUserById, patchUser } from '../../../api';
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../../assets/styles/styles';
import { SelectList } from 'react-native-dropdown-select-list'


export default function UserProfileEditScreen({ navigation }) {

  const [user, setUser] = useState('');
  const route = useRoute();
  const userId = route.params.userId;
  const refresh = route.params.refresh;
  const fetchData = async () => {
    getUserById(userId, (res) => {
      setUser(res.data)
    })
  }

  useEffect(() => {
    fetchData();
    if ({ "refresh": true }) { fetchData() };
  }, [userId, route, refresh]);

  const editUser = async () => {
    patchUser(userId, user.email, user.firstname, user.lastname, user.roles, (res => {
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
  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'USER', value: ["ROLE_USER"]},
      {key:'ADMIN', value: ["ROLE_ADMIN"]},
  ]
  console.log(user.roles);

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
          <Text style={styles.label}>Role : {user.roles.includes('ROLE_ADMIN') ? "ADMIN" : "USER"} </Text>
          <SelectList 
            setSelected={(val) => setSelected(val)}
            boxStyles={styles.inputAdmin}
            onSelect={() => setUser({ ...user, roles: selected })} 
            data={data} 
            save="value"
            search={false}
          />

          {/* <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.inputAdmin}
            onChangeText={(txt) => setUser({ ...user, password: txt })}
            value={user ? user.password : ""}
            placeholder="Modifiez votre mot de passe"
          /> */}

          <View style={styles.btna}>
            <BoutonAdmin text="Modifier"
              onPress={() => editUser()}
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