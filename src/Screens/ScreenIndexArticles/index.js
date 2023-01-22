import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Pagination from '../../Composants/Pagination';
import styles from '../../Composants/styles/styles';
import { getArticles } from '../../../api';
import Header from '../../Composants/Header'


export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState('');
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const maxItems = 5;
    const fetchData = () => {
        getArticles(page, (res) => {
            setArticles(res.data);
            setTotalItems(res.data['hydra:totalItems']);
        });
    }

    useEffect(() => {
        fetchData()
    }, [page]);

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
                <View style={styles.contenerCenter}>
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
            <Pagination
                fetchData={fetchData}
                page={page}
                setPage={setPage}
                totalItems={totalItems}
                maxItems={maxItems}
            />
        </SafeAreaView>
    )
}