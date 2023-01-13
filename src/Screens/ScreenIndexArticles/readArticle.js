
import React, { useState, useEffect, Fragment } from 'react'
import { SafeAreaView, Text, StyleSheet, ScrollView,View } from 'react-native';
import { getArticleById } from '../../../api';
import AffichageComment from '../../Composants/comments/affichageComment';
import Footer from '../../Composants/Footer';

export default function ReadArticle (navigation) {
    const debug = true
    const articleId = navigation['route']['params']['articleId']
    const [article, setArticle] = useState('')
    useEffect(() => {
        const fetchData = async() => {
          getArticleById(articleId, (res) => {
            setArticle(res.data)
        })
        }
        fetchData();
      }, []);
    if(debug) {
        // Test pour la débug
        console.log('id Article ' +navigation['route']['params']['articleId'])
        console.log('Article content '+ article.title)
        console.log('Content Article ' + article.createdAt)
        console.log('lastname' + article.userId)
        // Test condition d'affichage des commentaires.
        /*if(article.comments == 0 && article) {
            console.log('voïd comments')
        } else {
            console.log('Comments '+ article.comments)
            //console.log('Comments en string' +  JSON.stringify(article.comments))
            const temp = article.comments
            {temp.map((item, key)=>{
                console.log(item.key)
            })
            }
   
       
        }*/
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
          
            {article && article.comments ? (
                <Fragment>
                   
                        <Text style={styles.title}>{article.title}</Text>
                        <Text style={styles.date}>Le {brassageDate(article.createdAt)}</Text>
                        <Text style={styles.date}>Par : {article.userId.lastname +' '+article.userId.firstname}</Text>
                        <Text style={styles.txt}>{article.content}</Text>
                    
                    <ScrollView>
                        {article.comments.map(comment => (
                            <Fragment key={comment['@id'].replace(/[^0-9]/g, '')}>
                                <Text style={styles.date}>Le : {brassageDate(comment.createdAt)}</Text>
                                <Text style={styles.txt}>Par : {comment.userId.firstname} {comment.userId.lastname} </Text>
                                <Text style={styles.txt}>{comment.content}</Text>
                            </Fragment>
                        ))}
                    </ScrollView>
                </Fragment>
                
        ) : (
                <Text style={styles.txt}>...loading</Text>
            )
        }
       

    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#0077B6",
        width: "auto"
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

/*
{`${brassageDate(comment.createdAt)} - ${comment.content}`}

*/