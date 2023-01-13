// Debug on => true debug off = false

const debug = false;
import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, Pressable, Button} from 'react-native'

import { getArticles, postComment } from '../../../api';
import Footer from '../../Composants/Footer';


export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState('');
    const [next, setNext] = useState(false)
    const [previous, setPrevious] = useState(true)
    const [page, setPage] = useState(1);

    useEffect(() => {
        setNext(false)
        setPrevious(false)
        pageCheck(page)
        const fetchData = () => {
            getArticles(page, (res) => {
                setArticles(res.data);
            });}
        fetchData()
    }, [page]);

    const pageCheck = (page) => {
        if(page == pagesNom){
            setPage(pagesNom)
            setNext(true)
        }
        else if (page == 1){
            setPrevious(true)
        }
    }
    
    const pagesNom = Math.ceil(articles['hydra:totalItems']/5);

function goToArticle (id) {
    navigation.navigate("ReadArticle", {
        articleId: id
      });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{"Post du forum"}</Text>
            <View>
            {articles ? (articles['hydra:member'].map((item, index) => (
                <Pressable style={styles.linkArticle} key={index} onPress={() => goToArticle(item['@id'].replace(/[^0-9]/g, ''))}>
                    <Text style={styles.linkArticle} key={index}>{item.title}</Text>  
                </Pressable>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
            </View>
            <View style={styles.pagination}>
            <Button
              onPress={() => {
                setPage(1);
            }}
              title="<<"
              color="#841584"
              disabled={previous}
            />
                        <Button
              onPress={() => {
                setPage(page-1);
            }}
              title="<"
              color="#841584"
              disabled={previous}
            />
            <Button
              onPress={() => {
                setPage(page+1);
            } }
              title=">"
              color="#841584"
              disabled={next}
            />
            <Button
              onPress={() => {
                setPage(pagesNom);
            } }
              title=">>"
              color="#841584"
              disabled={next}
            />

            </View>
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
        width: "70%",
        marginTop: 20
    },
    linkArticle: {
        color: "#FFFFFF",
        fontSize: 19,
        marginBottom: 10
    },
    pagination: {
        flexDirection: "row"
    }
})

//    <Text style={styles.linkArticle} key={index}>{item.title}</Text>  
// () => {item['@id'].replace(/[^0-9]/g, '')}
// navigation.navigate