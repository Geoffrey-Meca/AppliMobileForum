import React, { useState, useEffect} from 'react'
import { SafeAreaView, Text, View,TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import Footer from '../../Composants/Footer';
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';
import { patchComment, deleteComment, getCommentsByArticle, patchArticle, getArticleById } from '../../../api';
import Pagination from '../../Composants/Pagination';

export default function ArticleEditScreen ( {navigation} ) {
    
    const [article, setArticle] = useState('');
    const [comments, setComments] = useState('');
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const maxItems = 5;
    const route = useRoute();
    const articleId = route.params.articleId;
    const refresh = route.params.refresh;
    const fetchData = async() => {
      getArticleById(articleId, (res) => {
        setArticle(res.data)
    })
    }
    const fetchComments = async() => {
      getCommentsByArticle(articleId, page, (res) => {
        setComments(res.data);
        setTotalItems(res.data['hydra:totalItems']);    
      })
    }

    useEffect(() => {
      fetchData();
      fetchComments();
      if({"refresh": true}) {fetchData()}
      }, [articleId, route, refresh, page]);

      const editArticle = async () => {
        patchArticle(articleId, article.title, article.content, (res => { 
            console.log(res);
            fetchData();
            Alert.alert(
                'L\'article a été mis à jour avec succès.',
                '',
                [
                  {
                    text: 'Oui',
                    onPress: () => {navigation.navigate('ArticlesAdmin', { refresh: true })}
                  },
                ],
              );
        }))
            

      }
      const [comment, setComment] = useState('');
      const editComment = async (commentId) => {
        patchComment(commentId, comment.content, (res => { 
            fetchData();
            Alert.alert(
                'Le comment a été mis à jour avec succès.',
                '',
                [
                  {
                    text: 'Oui',
                    onPress: () => {navigation.navigate('ArticleAdmin', { refresh: true, articleId: comment.article.id})}
                  },
                ],
              );
        }))
            

      }
      

      return (
        <SafeAreaView style={styles.container}>
          <Header nav={navigation} />
          <ScrollView>
                    <Text style={styles.title}>Modifier</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(txt) => setArticle({...article, title: txt})}
                        value={article ? article.title : ""}
                    />
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={(txt) => setArticle({...article, content: txt})}
                        value={article ? article.content : ""}
                    />
                    <View style={styles.btn}>
                    <BoutonAdmin text="Modifier" 
                        onPress={ () => editArticle()}
                    />
                    <BoutonAdmin text="Annuler" 
                        onPress={() => navigation.navigate('ArticlesAdmin')}
                    />
                  </View>
                  
                <Text style={styles.comments}>Comments</Text>
                {comments ? (comments['hydra:member'].map((item, index) => ( 
                          <View key={item.id}>
                          <TextInput
                                 value={item.content}
                                 onChangeText={txt => {
                                   const updatedComments = comments['hydra:member'].map((comment) => {
                                       if (comment.id === item.id) {
                                         comment.content = txt;
                                         setComment(comment);
                                       }
                                       return comment;
                                   });
                                   setComments({'hydra:member':updatedComments});
                                 }}
                            style={styles.input}
                          />
                          <Text style={styles.btn}>
                          <BoutonAdmin  text="Modifier" onPress={() => editComment(item.id)} />
                          <BoutonAdmin  text="Supprimer" onPress={ () =>  
                          Alert.alert(
                            "Vous êtes sur le point de supprimer le comment",
                            "Êtes-vous sur de vouloir procéder ?",
                            [
                              {
                                  text: "Non",
                              },
                              {
                                text: 'Oui',
                                onPress: () => deleteComment(item.id, (res) => {
                                    console.log(res.data);
                                    navigation.navigate('ArticleAdmin', {refresh: true, articleId: item.article.id});
                                }),
                                },
                              
                            ],
                          )}
                             />
                          </Text>
                          <Text
                          style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}>
                          </Text>
                        </View>
                ))
                ) : (
                    <Text>Loading comments...</Text>
                )}
                </ScrollView>
                <Pagination 
                fetchData={fetchData}
                page={page}
                setPage={setPage}
                totalItems={totalItems}
                maxItems={maxItems}
                />
        <Footer/>
        </SafeAreaView>
      )
    }
    
    const styles = StyleSheet.create({
        container: {
            position: "relative",
            backgroundColor: "#0077B6",
            width: "100%",
            height: "100%",
        },
        formContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            color: '#FFFFFF',
            fontSize: 30,
            textAlign: 'center'
        },
        comments: {
          color: '#FFFFFF',
          fontSize: 20,
          textAlign: 'center'
        },
        input: {
            backgroundColor: "#F0F0F0",
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 3,
            width: '80 %',
            height: 42,
            margin: '5%',
            padding: 5
        }
    })