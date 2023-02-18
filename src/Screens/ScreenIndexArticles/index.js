import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../assets/styles/styles';
import { getArticles } from '../../../api';
import Header from '../../Composants/Header';
import { useRoute } from '@react-navigation/native';
import Card from '../../Composants/Card';

export default function IndexArticleScreen({ route, navigation }) {
  
  const refresh = route.params.refresh;
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = () => {
      //set isRefreshing to true
      setIsRefreshing(true)
      setArticles([])
      fetchDataListArticles()
      // and set isRefreshing to false at the end of your callApiMethod()
  }
  
  const fetchData = () => {
    getArticles(page, (res) => {
      setArticles(prevArticles => [...prevArticles, ...res.data['hydra:member']]);
      setTotalItems(res.data['hydra:totalItems']);
      setIsRefreshing(false)
    });
  };

  useEffect(() => {
    if (refresh == true){
        setArticles([])
        setPage(1)
        route.params.refresh = false
    }
    fetchData();

  }, [page, refresh]);

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
                contentContainerStyle={{ flexGrow: 1 }}
                data={articles}
                keyExtractor={(item, index) => index.toString()}

                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('ReadArticle', { articleId: item.id })}>
                        <Card info={item} />
                    </Pressable>
                )}

                onRefresh={onRefresh}
                refreshing={isRefreshing}

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
