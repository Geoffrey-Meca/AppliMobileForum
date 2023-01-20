
import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, ScrollView, View } from 'react-native';
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
    const log = isLogged()
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

        if(isOpenAdd) {
            await fetchData();
        }
        setIsOpenAdd(!isOpenAdd)
    }
    function brassageDate(date) {
        if  (date  == null || date == '') {
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
        <View style={styles.container}>
          
            <Header nav={navigation} />
            <ScrollView style={styles.comments}>
            {article && article.comments ? (

                <View style={styles.content}>
                    <Text style={styles.title}>{article.title}</Text>
                    <Text style={styles.date}>Le {brassageDate(article.createdAt)}</Text>
                    <Text style={styles.date}>Par : {article.userId.lastname + ' ' + article.userId.firstname}</Text>
                    <Text style={styles.txt}>{article.content}</Text>
                    {log ? (<BoutonApp text="Add" onPress={openAdd} />): (<Text></Text>)}
                    {isOpenAdd && <ModalAddComment close={openAdd} onPress={openAdd} id={articleId.articleId}/> }
                        {article.comments.map(comment => (
                            <View key={comment['@id'].replace(/[^0-9]/g, '')}>
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        backgroundColor: "#0077B6",
        width: "auto",
        height: "200%",
        overflow: "scroll"
    },
    comments: {
        width: "100%",
        height: "100%",
        marginBottom: "10%",
        textAlign: "left",
        flex: 1,


    },
    OneComments: {
 
        backgroundColor: "#90E0EF",
        color: "#000000",
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: "5%",
        padding: "2%",
        borderRadius: 5
    },
    title: {
        color: "#FFFFFF",
        fontSize: 24,
        margin: 50,
        textAlign: "center"
    },
    txt: {
        color: "#FFFFFF",
        fontSize: 20,
        width: "100%",
        marginTop: 20,
        paddingRight: "3%",
        paddingLeft: "3%",
        textAlign: "justify"

    },
    content: {
        textAlign: "justify",
        marginLeft: "1%",
        width: "100%",
        color: "#FFFFFF",
        fontSize: 8
    },
    date: {
        color: "#FFFFFF",
        fontSize: 16,
        width: "100%",
        marginTop: "5%"
    },
    linkArticle: {
        color: "#FFFFFF",
        fontSize: 19,
        marginBottom: 10
    }
})
