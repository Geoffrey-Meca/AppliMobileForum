import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { getArticles, postComment } from '../../../api';
import Footer from '../../Composants/Footer';


export default function IndexArticleScreen({ navigation }) {

    const [articles, setArticles] = useState('');
    const [page, setPage] = useState(1);

    const fetchData = () => {
        getArticles(page, (res) => {
            setArticles(res.data);
        });}
    const pagesNom = Math.ceil(articles['hydra:totalItems']/5);
    console.log(page);

    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{"Post du forum"}</Text>
            <View>
            {articles ? (articles['hydra:member'].map((item, index) => (
                <Text key={index}>{item.title}</Text>
                ))
            ) : (
                <Text>Loading...</Text>
            )}
            </View>
            <View style={styles.pagination}>
            <Button
              onPress={() => {
                setPage(1);
                fetchData();
            }}
              title="<<"
              color="#841584"
            />
                        <Button
              onPress={() => {
                setPage(page-1);
                fetchData();
            }}
              title="<"
              color="#841584"
            />
            <Button
              onPress={() => {
                setPage(page+1);
                fetchData();
            } }
              title=">"
              color="#841584"
            />
            <Button
              onPress={() => {
                setPage(pagesNom);
                fetchData();
            } }
              title=">>"
              color="#841584"
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
        color: "#fff",
        fontSize: 40,
        margin: 50,
    },
    txt: {
        color: "#fff",
        fontSize: 20,
        width: "70%",
        marginTop: 20
    },
    pagination: {
        flexDirection: "row"
    }
})