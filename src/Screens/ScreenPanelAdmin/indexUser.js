import React, { useState, useEffect} from 'react'
import { SafeAreaView, Text, View,TextInput, StyleSheet, Alert  } from 'react-native';
import { getUserById, patchUser } from '../../../api';
import Footer from '../../Composants/Footer';
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';



export default function UserProfileEditScreen ( {navigation} ) {
    
    const [user, setUser] = useState('');
    const route = useRoute();
    const userId = route.params.userId;
    const fetchData = async() => {
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
           <View style={styles.container}>
    
                <View style={styles.formContainer}></View>
                    <Text style={styles.title}>Modifier</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({...user, firstname: txt})}
                        value={user ? user.firstname : ""}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({...user, lastname: txt})}
                        value={user ? user.lastname : ""}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({...user, email: txt})}
                        value={user ? user.email : ""}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setUser({...user, password: txt})}
                        value={user ? user.password : ""}
                        placeholder= "Modifiez votre mot de passe"
                    />
                    <View style={styles.btn}>
                    <BoutonAdmin text="Modifier" 
                        onPress={ () => user.password ? editUser() : 
                          Alert.alert(
                            "Le champ mot de passe ne doit pas être vide")}
                    />
                    <BoutonAdmin text="Annuler" 
                        onPress={() => navigation.navigate('Users')}
                    />
                    </View>
        </View>
        <Footer/>
        </SafeAreaView>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            position: "relative",
            backgroundColor: "#0077B6",
            width: "100%",
            height: "100%",
        },
        formContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            color: '#FFFFFF',
            fontSize: 30,
            marginBottom: 20,
            textAlign: 'center'
        },
        input: {
            backgroundColor: "#F0F0F0",
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 3,
            width: '80 %',
            height: 42,
            margin: '5%',
            padding: 5
        },
        btn: {
          flexDirection: "row",
          justifyContent:"center"
        }
    })