
import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, ScrollView,View } from 'react-native';
import { getArticleById } from '../../../api';
import Footer from '../../Composants/Footer';
import * as SecureStore from 'expo-secure-store'


export default function ReadArticle(navigation) {

    const articleId = navigation['route']['params']['articleId']
    const [article, setArticle] = useState('')
    
    useEffect(() => {
        const fetchData = async () => {
            getArticleById(articleId, (res) => {
                setArticle(res.data)
            })
        }
        fetchData();
    }, []);

        function brassageDate (date) {
            if(date) {
                let buffer =  date.split('T')
                let ymd = buffer[0]
                let brassage = ymd.split('-')
                let dmy = brassage[2] + '/' + brassage[1] + '/' + brassage[0]
                return dmy
            } else {
                return false
            }
        }
  return (
    <SafeAreaView style={styles.container}>
          
            {article && article.comments ? (
          
                 <View style={styles.content}>  
                        <Text style={styles.title}>{article.title}</Text>
                        <Text style={styles.date}>Le {brassageDate(article.createdAt)}</Text>
                        <Text style={styles.date}>Par : {article.userId.lastname +' '+article.userId.firstname}</Text>
                        <Text style={styles.txt}>{article.content}</Text>

                        
                <ScrollView style={styles.comments}>
                    {article.comments.map(comment => (
                        <View key={comment['@id'].replace(/[^0-9]/g, '')}>
                            <View style={styles.OneComments}>
                                <Text>Le : {brassageDate(comment.createdAt)} Par : {comment.userId.firstname} {comment.userId.lastname} </Text>
                                <Text>{comment.content}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

         
                </View>
                
        ) : (
                <Text style={styles.txt}>...loading</Text>
            )
        }
       
    <Footer />
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: "center",
        backgroundColor: "#0077B6",
        width: "auto",
        overflow: "scroll"
    },
    comments: {
        width: "100%",
        height: "110%",
        textAlign: "left",
        flex: 1

    },
    OneComments: {
        backgroundColor: "#90E0EF",
        color: "#000000",
        margin: "2%",
        padding: "2%"
    },
    title: {
        color: "#FFFFFF",
        fontSize: 40,
        margin: 50,
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
