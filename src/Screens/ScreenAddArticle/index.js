import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
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
                <BoutonApp text="Publiez" />
            </ScrollView>
        </SafeAreaView>
    )
}