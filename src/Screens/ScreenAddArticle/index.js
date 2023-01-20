import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BoutonApp from '../../Composants/Bouton'
import Footer from '../../Composants/Footer'
import Header from '../../Composants/Header'

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
            <Header />
            <ScrollView>
                <Text style={styles.title}>Ajouter un article</Text>
                <View style={styles.titleInput}>
                    <Text style={{ color: '#fff' }}>Titre de l'article : </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={newTitleArticle}
                        placeholder='Salut'
                    />
                </View>
                <Text style={styles.titleH2}>Texte de votre article</Text>
                <View>
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
            <Footer />
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        margin: 30,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    titleInput: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "8%"
    },
    titleH2: {
        fontFamily: 'Iceland_400Regular',
        color: '#FFFFFF',
        fontSize: 28,
    },
    input: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '50 %',
        height: "95%",
        paddingLeft: 15,
    },
    inputArticle: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '100 %',
        height: "auto",
        paddingLeft: 15,
        marginBottom: "25%"
    }
})