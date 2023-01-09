import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArticles } from '../../../api';

export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            getArticles((data) => {
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
                    articles['hydra:member'].map((item, index) => (
                        <Text key={index}>{item.title}</Text>
                    ))
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0077B6",
    },
    title: {
        fontSize: 40,
        margin: 50,
    },
    txt: {
        fontSize: 20,

        width: "70%",
        marginTop: 20

    }
})