
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getArticleById } from '../../../api';
import Footer from '../../Composants/Footer';
import Header from '../../Composants/Header';
import BoutonApp from '../../Composants/Bouton';
import ModalAddComment from '../../Composants/Modals/ModalAddComment';
import { isLogged } from '../../../lib';


export default function ReadArticle({ route, navigation }) {
    const articleId = route.params
    const [article, setArticle] = useState('')
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    let fetchData = async () => {
        getArticleById(articleId.articleId, (res) => {
            setArticle(res.data)
        })
    }
    useEffect(() => {
        fetchData();
    }, [articleId]);

    async function openAdd() {
        // Permet de forcé le refresh des commentaires.

        if (isOpenAdd) {
            await fetchData();
        }
        setIsOpenAdd(!isOpenAdd)
    }
    function brassageDate(date) {
        if (date == null || date == '') {
            return false
        } else {
            let buffer = date.split('T')
            let ymd = buffer[0]
            let brassage = ymd.split('-')
            let dmy = brassage[2] + '/' + brassage[1] + '/' + brassage[0]
            return dmy
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <ScrollView style={{ marginBottom: "10%" }}>
                {article && article.comments ? (
                    <View>
                        <Text style={styles.title}>{article.title}</Text>
                        <View style={styles.Author}>
                            <Text style={styles.date}>Le {brassageDate(article.createdAt)}</Text>
                            <Text style={styles.date}>Par : {article.userId.lastname + ' ' + article.userId.firstname}</Text>
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.txt}>{article.content}</Text>
                        </View>

                        {isLogged() ? (<BoutonApp text="Add" onPress={openAdd} />) : (<Text style={styles.txt}>Connectez-vous pour ajouter un commentaire !</Text>)}
                        {isOpenAdd && <ModalAddComment close={openAdd} onPress={openAdd} id={articleId.articleId} />}

                        {article.comments.map(comment => (
                            <View style={styles.commentsContainer} key={comment['@id'].replace(/[^0-9]/g, '')}>
                                <View style={styles.OneComments}>
                                    <Text>Le : {brassageDate(comment.createdAt)} Par : {comment.userId.firstname} {comment.userId.lastname} </Text>
                                    <Text>{comment.content}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.txt}>...loading</Text>
                )
                }
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0077B6",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        marginTop: 20,
        textAlign: "center",
        fontFamily: 'Iceland_400Regular'
    },
    Author: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    date: {
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: "5%",
    },
    articleContainer: {
        backgroundColor: "#ffff",
        marginVertical: "7%",
        height: "auto",
        paddingVertical: "10%",
        paddingHorizontal: "3%"
    },
    txt: {
        fontSize: 20,
        textAlign: "justify"
    },
    commentsContainer: {
        marginTop: "5%"
    },
    OneComments: {
        backgroundColor: "#90E0EF",
        marginHorizontal: "3%",
        marginBottom: "5%",
        padding: "2%",
        borderRadius: 5
    },
})
