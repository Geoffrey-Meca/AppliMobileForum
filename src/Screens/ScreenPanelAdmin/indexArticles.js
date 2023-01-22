import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getArticles, deleteArticle } from '../../../api';
import Header from '../../Composants/Header';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import { useRoute } from '@react-navigation/native';
import Pagination from '../../Composants/Pagination';



export default function IndexArticlesScreen({ navigation }) {

    const [articles, setArticles] = useState('');
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const maxItems = 5;
    const route = useRoute();
    const refresh = route.params;

    const fetchData = () => {
        getArticles(page, (res) => {
            setArticles(res.data);
            setTotalItems(res.data['hydra:totalItems']);
        });
    }

    useEffect(() => {
        fetchData()
        if ({ "refresh": true }) { fetchData() }
    }, [page, route, refresh]);

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Liste des articles"}</Text>
            <ScrollView>
                {articles ? (articles['hydra:member'].map((item, index) => (
                    <View style={styles.pageContainer} key={index}>
                        <Text style={{ color: "#fff", fontSize: 25, paddingBottom: "5%", fontFamily: 'Iceland_400Regular' }} >Article n° {item.id} :</Text>
                        <Text style={{ color: "#fff", fontSize: 25, paddingBottom: "5%", fontFamily: 'Iceland_400Regular', textAlign: "center" }} >{item.title}</Text>
                        <View style={styles.infoArticle}>
                            <Text style={styles.linkArticle} >{item.content}</Text>
                        </View>
                        <View style={styles.btna}>
                            <BoutonAdmin text="Modifier" onPress={() => navigation.navigate('ArticleAdmin', { articleId: item.id })} />
                            <BoutonAdmin text="Supprimer" onPress={() =>
                                Alert.alert(
                                    "Vous êtes sur le point de supprimer l'article",
                                    "Êtes-vous sur de vouloir procéder ?",
                                    [
                                        {
                                            text: "Non",
                                        },
                                        {
                                            text: 'Oui',
                                            onPress: () => deleteArticle(item.id, (res) => {
                                                console.log(res.data);
                                                navigation.navigate('ArticlesAdmin', { refresh: true });
                                            }),
                                        },

                                    ],
                                )}
                            />
                        </View>
                    </View>
                ))
                ) : (
                    <Text>Loading...</Text>
                )}
                <Pagination
                    fetchData={fetchData}
                    page={page}
                    setPage={setPage}
                    totalItems={totalItems}
                    maxItems={maxItems}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        margin: 30,
        fontFamily: 'Iceland_400Regular'
    },
    pageContainer: {
        justifyContent: "space-around"
    },
    infoArticle: {
        flexDirection: "row",
        padding: "5%",
        borderWidth: 1,
        backgroundColor: "#00B4D8"
    },
    linkArticle: {
        color: "#FFFFFF",
        fontSize: 15,
    },
    pagination: {
        flexDirection: "row",
        margin: 50,
    },
    btna: {
        flexDirection: "row",
        justifyContent: "center",
        margin: "5%"
    }
})