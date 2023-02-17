import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../assets/styles/styles';
import { getArticles } from '../../../api';
import Header from '../../Composants/Header';
import { useRoute } from '@react-navigation/native';
import Card from '../../Composants/Card';

export default function IndexArticleScreen({ navigation }) {
  const route = useRoute();
  const refresh = route.params.refresh;
  console.log(refresh)

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fetchData = () => {
    setLoading(true);
    getArticles(page, (res) => {
      setArticles(prevArticles => [...prevArticles, ...res.data['hydra:member']]);
      setTotalItems(res.data['hydra:totalItems']);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (refresh == true){
        setArticles([])
        setPage(1)
        route.params.refresh = false
    }
    fetchData();
    console.log(page)
  }, [page, refresh]);

  function goToArticle(id) {
    navigation.navigate('ReadArticle', {
      articleId: id,
      refresh: true,
    });
  }

  const renderFooter = () => {
    if (loading) {
    return (
        <View>
           {<ActivityIndicator />}
        </View>
        );}
    };
    
    return (
    <SafeAreaView style={styles.container}>
      <Header nav={navigation} />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
        <Pressable onPress={() => goToArticle(item.id)}>
           <Card info={item} />
        </Pressable>
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
           if (articles.length < totalItems) {
           setPage(page + 1);
           }
        }}
        ListFooterComponent={renderFooter}
        />
    </SafeAreaView>
    );

}
