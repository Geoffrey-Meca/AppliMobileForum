import React, { useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { postArticle } from '../../../api';
import Header from '../../Composants/Header'
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
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
        if (newArticle.length >= 50) {
            postArticle(newTitleArticle, newArticle, (res => {
                if (res.status != 201) {
                    Alert.alert("Erreur", `${res.data.message}`)

                } else {
                    Alert.alert('Votre article a bien été publié')
                    navigation.navigate('Articles', { refresh: true })
                    setNewTitleArticle("")
                    setNewArticle("")
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
                    <ScrollView>
                        <TextInput style={styles.inputArticle}
                            editable
                            multiline
                            onChangeText={onChangeTextArticle}
                            numberOfLines={8}
                            maxLength={755}
                            value={newArticle}
                            placeholder={"Votre Article"}
                        />
                    </ScrollView>
                </View>
                <ButtonComponent
                    contButon={styles.contenerCenter}
                    button={styles.butonStyleLitte}
                    txtButton={styles.textButon}
                    text={<MaterialIcons name="post-add" size={24} color="black" />}
                    onPress={addArticle}
                />
            </ScrollView>
        </SafeAreaView>
    )
}