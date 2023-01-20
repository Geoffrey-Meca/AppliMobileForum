import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArticles } from '../../../api';
import Footer from '../../Composants/Footer';
import Header from '../../Composants/Header'


export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState('');
    const [next, setNext] = useState(false)

    const [page, setPage] = useState(1);
    const [previous, setPrevious] = useState(true)
    const pagesNom = Math.ceil(articles['hydra:totalItems'] / 5);

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

    }, [page]);

    const pageCheck = (page) => {
        if (page == pagesNom) {
            setPage(pagesNom)
            setNext(true)
        }
        else if (page == 1) {
            setPrevious(true)
        }
    }

    function goToArticle(id) {
        navigation.navigate("ReadArticle", {
            articleId: id
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Post du forum"}</Text>
            <ScrollView>
                <View style={styles.ArticlesContainer}>
                    {articles ? (articles['hydra:member'].map((item, index) => (
                        <Pressable key={index} onPress={() => goToArticle(item['@id'].replace(/[^0-9]/g, ''))}>
                            <Text style={styles.linkArticle} key={index}>{item.title}</Text>
                        </Pressable>
                    ))
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </View>
            </ScrollView>
            <View style={styles.pagination}>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        setPage(1);
                    }
                    }
                    disabled={previous}
                ><Text><AntDesign name="banckward" size={24} color="black" /></Text></TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        setPage(page - 1);
                    }
                    }
                    title="<"
                    disabled={previous}
                ><Text><AntDesign name="caretleft" size={24} color="black" /></Text></TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        setPage(page + 1);
                    }
                    }
                    disabled={next}
                ><Text><AntDesign name="caretright" size={24} color="black" /></Text></TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        setPage(pagesNom);
                    }
                    }
                    disabled={next}
                ><Text><AntDesign name="forward" size={24} color="black" /></Text></TouchableOpacity>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        textAlign: "center",
        backgroundColor: '#CAF0F8',
        height: "auto",
        flex: 1,
        padding: 5,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 3,
        borderColor: "black"

    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 45,
        margin: 30,
        fontFamily: 'Iceland_400Regular'
    },
    ArticlesContainer: {
        alignItems: "center",
        paddingHorizontal: 5,
        paddingTop: 15
    },
    linkArticle: {
        color: "#FFFFFF",
        fontSize: 20,
        marginBottom: 20,
    },
    pagination: {
        flexDirection: "row",
        margin: 50,
    }
})