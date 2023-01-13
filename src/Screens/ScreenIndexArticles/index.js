// Debug on => true debug off = false

const debug = false;
import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet, View, Pressable} from 'react-native'

import { getArticles, postComment } from '../../../api';
import Footer from '../../Composants/Footer';


export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            getArticles(1, (res) => {
                setArticles(res.data);
            });
        };
        fetchData();
    }, []);
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
    }
})

//    <Text style={styles.linkArticle} key={index}>{item.title}</Text>  
// () => {item['@id'].replace(/[^0-9]/g, '')}
// navigation.navigate