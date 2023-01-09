import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArticleById, login } from '../../../api';
import Footer from '../../Composants/Footer';


export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState(null);
    login('geoffrey@gmail.com', 'password', (data) => {
        console.log(data)
    })
    useEffect(() => {
        const fetchData = async () => {
            getArticleById(370, (data) => {
                setArticles(data);
            });
        };
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{"Post du forum"}</Text>
            <View>
                {articles ? (

                    <Text>{articles.title}</Text>
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
        color: "#fff",
        fontSize: 40,
        margin: 50,
    },
    txt: {
        color: "#fff",
        fontSize: 20,
        width: "70%",
        marginTop: 20
    }
})