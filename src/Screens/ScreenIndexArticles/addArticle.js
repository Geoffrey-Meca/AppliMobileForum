import React, { useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { postArticle } from '../../../api';
import BoutonApp from '../../Composants/Bouton'
import Header from '../../Composants/Header'
import styles from '../../../assets/styles/styles'

export default function AddArticleScreen({ navigation }) {

    const [newTitleArticle, setNewTitleArticle] = useState("");
    const [newArticle, setNewArticle] = useState("");

    const onChangeText = (val) => {
        setNewTitleArticle(val)
    }
    const onChangeTextArticle = (val) => {
        setNewArticle(val)
    }

    const addArticle = () => {
        // Controle size of Article 
        if (newArticle.length >= 50) {

            postArticle(newTitleArticle, newArticle, (res => {
                if (res.status != 201) {
                    Alert.alert("Erreur", `${res.data.message}`)

                } else {
                    Alert.alert('Votre article a bien été publié')
                    navigation.navigate('Articles')
                }
            }))

        } else {
            alert("Article trop court ! Soyer plus créatif ;)")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <ScrollView>
                <Text style={styles.title}>Ajouter un article</Text>
                <View style={styles.titleInputContainer}>
                    <Text style={{ color: '#fff' }}>Titre de l'article : </Text>
                    <TextInput
                        style={styles.inputTitleArticle}
                        onChangeText={onChangeText}
                        value={newTitleArticle}
                        placeholder='Salut'
                    />
                </View>
                <Text style={styles.titleH2Article}>Texte de votre article :</Text>
                <View style={styles.inputArticleContainer}>
                    <TextInput style={styles.inputArticle}
                        editable
                        multiline
                        onChangeText={onChangeTextArticle}
                        numberOfLines={8}
                        maxLength={755}
                        value={newArticle}
                        placeholder={"Votre Article"}
                    />
                </View>
                <BoutonApp text="Publiez" onPress={addArticle} />
            </ScrollView>
        </SafeAreaView>
    )
}