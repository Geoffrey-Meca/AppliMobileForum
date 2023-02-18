import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUserById, patchUser } from '../../../api';
import { useRoute } from '@react-navigation/native';
import Header from '../../Composants/Header';
import styles from '../../../assets/styles/styles';
import { SelectList } from 'react-native-dropdown-select-list'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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
  }, [userId, refresh]);

  const editUser = async () => {

    patchUser(userId, user.email, user.firstname, user.lastname, user.roles, (res => {

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
    { key: 'USER', value: ["ROLE_USER"] },
    { key: 'ADMIN', value: ["ROLE_ADMIN"] },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            keyboardType='email-address'
          />
          <Text style={styles.label}>Role : {user.roles} </Text>
          <SelectList
            setSelected={(val) => setSelected(val)}
            boxStyles={styles.inputAdmin}
            onSelect={() => setUser({ ...user, roles: selected })}
            data={data}
            save="value"
            search={false}
          />
          <View style={styles.OneLine}>
            <ButtonComponent
              contButon={styles.contenerCenter}
              button={styles.butonStyleIcon}
              txtButton={styles.textButon}
              text={<FontAwesome name="pencil" size={24} color="black" />}
              onPress={editUser}
            />
            <ButtonComponent
              contButon={styles.contenerCenter}
              button={styles.butonStyleIcon}
              txtButton={styles.textButon}
              text={<MaterialCommunityIcons name="lock-reset" size={24} color="black" />}
              onPress={() => navigation.navigate('Users', { refresh: true })}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}