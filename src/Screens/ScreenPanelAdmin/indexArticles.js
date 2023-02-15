import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getArticles, deleteArticle } from '../../../api';
import Header from '../../Composants/Header';
import { useRoute } from '@react-navigation/native';
import Pagination from '../../Composants/Pagination';
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function IndexArticlesScreen({ navigation }) {

    const [articles, setArticles] = useState('');
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const maxItems = 5;
    const route = useRoute();
    const refresh = route.params;

    const fetchData = () => {
        getArticles(page, (res) => {
            setArticles(res.data);
            setTotalItems(res.data['hydra:totalItems']);
        });
    }

    useEffect(() => {
        fetchData()
        if ({ "refresh": true }) { fetchData() }
    }, [page, refresh]);

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>{"Liste des articles"}</Text>
            <ScrollView>
                {articles ? (articles['hydra:member'].map((item, index) => (
                    <View key={index} style={styles.box}>
                        <Text style={styles.titleH3} >Article n° {item.id} :</Text>
                        <Text style={styles.titleH3} >{item.title}</Text>
                        <View style={styles.infoArticle}>
                            <Text style={styles.txt} >{item.content}</Text>
                        </View>
                        <View style={styles.OneLine}>
                            <ButtonComponent
                                contButon={styles.contenerCenter}
                                button={styles.butonStyleIcon}
                                txtButton={styles.textButon}
                                text={<FontAwesome name="pencil" size={25} color="black" />}
                                onPress={() => navigation.navigate('ArticleAdmin', { articleId: item.id, refresh: true })}
                            />
                            <ButtonComponent
                                contButon={styles.contenerCenter}
                                button={styles.butonDangerous}
                                txtButton={styles.textButon}
                                text={<AntDesign name="delete" size={25} color="black" />}
                                onPress={() =>
                                    Alert.alert(
                                        "Vous êtes sur le point de supprimer l'article",
                                        "Êtes-vous sur de vouloir procéder ?",
                                        [
                                            {
                                                text: "Non",
                                            },
                                            {
                                                text: 'Oui',
                                                onPress: () => deleteArticle(item.id, (res) => {

                                                navigation.navigate('ArticlesAdmin', { refresh: true });

                                                }),
                                            },
                                        ],
                                    )}
                            />
                        </View>
                    </View>
                ))
                ) : (
                    <Text>Loading...</Text>
                )}
                <Pagination
                    fetchData={fetchData}
                    page={page}
                    setPage={setPage}
                    totalItems={totalItems}
                    maxItems={maxItems}
                />
            </ScrollView>
        </SafeAreaView>
    )
}