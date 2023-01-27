import React, { useState, useEffect } from 'react'
import { Text, View, Pressable, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Pagination from '../../Composants/Pagination';
import styles from '../../../assets/styles/styles';
import { getArticles } from '../../../api';
import Header from '../../Composants/Header';
import { useRoute } from '@react-navigation/native';


export default function IndexArticleScreen({ navigation }) {
    console.log('Chargement de la page')

    const route = useRoute();
    const refresh = route.params.refresh;

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
        console.log('useEffect')
        fetchData()
    }, [page, refresh]);

    function goToArticle(id) {
        navigation.navigate("ReadArticle", {
            articleId: id, refresh: true 
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <ScrollView>
                <Text style={styles.title}>Post du forum</Text>
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