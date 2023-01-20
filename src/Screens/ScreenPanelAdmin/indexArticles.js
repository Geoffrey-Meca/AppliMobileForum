import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, Button, ScrollView, Alert } from 'react-native'
import { getArticles } from '../../../api';
import { deleteArticle } from '../../../api';
import Footer from '../../Composants/Footer';
import Header from '../../Composants/Header';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import { useRoute } from '@react-navigation/native';



export default function IndexArticlesScreen({navigation }) {

    const [articles, setArticles] = useState('');
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1);
    const [previous, setPrevious] = useState(true)
    const pagesNom = Math.ceil(articles['hydra:totalItems'] / 5);
    const route = useRoute();
    const refresh = route.params;

    useEffect(() => {
        setNext(false)
        setPrevious(false)
        pageCheck(page)
        const fetchData = () => {
            getArticles(page, (res) => {
                setArticles(res.data);
            });
        }
        fetchData()
        if({"refresh": true}) {fetchData()}
    }, [page,route, refresh]);

    const pageCheck = (page) => {
        if (page == pagesNom) {
            setPage(pagesNom)
            setNext(true)
        }
        else if (page == 1) {
            setPrevious(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Liste des articles"}</Text>
            <ScrollView>
                {articles ? (articles['hydra:member'].map((item, index) => (
                        <View key={index}>
                          <Text style={styles.linkArticle} >{item.title}</Text>
                          <Text style={styles.btna}>
                          <BoutonAdmin  text="Modifier" onPress={() => navigation.navigate('ArticleAdmin', {articleId: item.id})} />
                          <BoutonAdmin  text="Supprimer" onPress={ () =>  
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
                          </Text>
                          <Text
                          style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}>
                          </Text>
                        </View>
                ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </ScrollView>
            <View style={styles.pagination}>
                <Button
                    style={styles.btn}
                    onPress={() => {
                        setPage(1);
                    }}
                    title="<<"
                    disabled={previous}
                />
                <Button
                    style={styles.btn}
                    onPress={() => {
                        setPage(page - 1);
                    }}
                    title="<"
                    disabled={previous}
                />
                <Button
                    style={styles.btn}
                    onPress={() => {
                        setPage(page + 1);
                    }}
                    title=">"
                    disabled={next}
                />
                <Button
                    style={styles.btn}
                    onPress={() => {
                        setPage(pagesNom);
                    }}
                    title=">>"
                    disabled={next}
                />
            </View>
            <Footer />
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
        fontSize: 20,
        margin: 30,
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
        justifyContent:"center",

      }
})