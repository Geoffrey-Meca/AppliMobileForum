import React, { useState, useEffect, Fragment } from 'react'
import { Text, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getArticleById } from '../../../api';
import Header from '../../Composants/Header';
import ModalAddComment from '../../Composants/Modals/ModalAddComment';
import { isLogged } from '../../../lib';
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { useRoute } from '@react-navigation/native';

export default function ReadArticle({ navigation }) {
    const log = isLogged()
    const route = useRoute();
    const articleId = route.params.articleId;
    const refresh = route.params.refresh;
    const [article, setArticle] = useState('')
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    let fetchData = async () => {
        getArticleById(articleId.articleId, (res) => {
            setArticle(res.data)
        })
    }
    useEffect(() => {
        fetchData();
        if ({ "refresh": true }) { fetchData() }
    }, [articleId, route, refresh]);

    async function openAdd() {
        // Permet de forcé le refresh des commentaires.
        await fetchData();
        setIsOpenAdd(!isOpenAdd)
    }
    function brassageDate(date) {
        if (date == null || date == '') {
            return false
        } else {
            let buffer = date.split('T')
            let ymd = buffer[0]
            let brassage = ymd.split('-')
            let dmy = brassage[2] + '/' + brassage[1] + '/' + brassage[0]
            return dmy
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <ScrollView>
                {article && article.comments ? (
                    <View>
                        <Text style={styles.titleH2}>{article.title}</Text>
                        <View style={styles.Author}>
                            <Text style={styles.date}>Le {brassageDate(article.createdAt)}</Text>
                            <Text style={styles.date}>Par : {article.userId.firstname + ' ' + article.userId.lastname}</Text>
                        </View>
                        <View style={styles.articleContainer}>
                            <Text style={styles.txt}>{article.content}</Text>
                        </View>

                        {log ? (<Fragment>
                            <View style={styles.OneLine}>
                                <Text style={styles.date}>Commentaires</Text>
                                <ButtonComponent
                                    contButon={styles.date}
                                    button={styles.butonStyleLitte}
                                    txtButton={styles.textButon}
                                    text={"Add"}
                                    onPress={openAdd}
                                />
                            </View>
                        </Fragment>) : (<Text style={styles.carreful}>Connectez-vous pour ajouter un commentaire !</Text>)}

                        {isOpenAdd && <ModalAddComment close={openAdd} onPress={openAdd} id={articleId.articleId} />}

                        {(article.comments.reverse()).map(comment => (
                            <View style={styles.commentsContainer} key={comment['@id'].replace(/[^0-9]/g, '')}>
                                <View style={styles.OneComments}>
                                    <Text>Le : {brassageDate(comment.createdAt)} Par : {comment.userId.firstname} {comment.userId.lastname} </Text>
                                    <Text>{comment.content}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.txt}>...loading</Text>
                )
                }
            </ScrollView>
        </SafeAreaView>
    )
}
