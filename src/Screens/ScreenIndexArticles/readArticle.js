const debug = true
import React, { useState, useEffect, Fragment } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { getArticleById } from '../../../api';
import Footer from '../../Composants/Footer';

export default function ReadArticle (navigation) {
    
    const articleId = navigation['route']['params']['articleId']
    const [article, setArticle] = useState('')
    useEffect(() => {
        const fetchData = async() => {
          getArticleById(articleId, (data) => {
            setArticle(data)
        })
        }
        fetchData();
      }, []);
    if(debug) {
        console.log('id Article ' +navigation['route']['params']['articleId'])
        console.log('Article content '+ article.title)
        console.log('Content Article ' + article.createdAt)
        // Test condition d'affichage des commentaires.
        if(article.comments == 0) {
            console.log('voïd comments')
        } else {
            console.log('Comments '+ article.comments)
            console.log(article)


        }
    }
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
    {article ? (
    <Fragment>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.date}>Le {brassageDate(article.createdAt)}</Text>
        <Text style={styles.date}>Par : {article.userId.lastname +' '+article.userId.firstname}</Text>
        <Text style={styles.txt}>{article.content}</Text>
    </Fragment>) : (
        <Text style={styles.txt}>...loading</Text>
    )
}
    <Footer/>
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