import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';
import { patchComment, deleteComment, getCommentsByArticle, patchArticle, getArticleById } from '../../../api';
import Pagination from '../../Composants/Pagination';
import styles from '../../../assets/styles/styles'

export default function ArticleEditScreen({ navigation }) {

  const [article, setArticle] = useState('');
  const [comments, setComments] = useState('');
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const maxItems = 5;
  const route = useRoute();
  const articleId = route.params.articleId;
  const refresh = route.params.refresh;
  const fetchData = async () => {
    getArticleById(articleId, (res) => {
      setArticle(res.data)
    })
  }
  const fetchComments = async () => {
    getCommentsByArticle(articleId, page, (res) => {
      setComments(res.data);
      setTotalItems(res.data['hydra:totalItems']);
    })
  }

  useEffect(() => {
    fetchData();
    fetchComments();
    if ({ "refresh": true }) { fetchData() }
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
            onPress: () => { navigation.navigate('ArticlesAdmin', { refresh: true }) }
          },
        ],
      );
    }))
  }
  const [comment, setComment] = useState('');
  const editComment = async (commentId) => {
    patchComment(commentId, comment.content, (res => {
      Alert.alert(
        'Le comment a été mis à jour avec succès.',
        '',
        [
          {
            text: 'Oui',
            onPress: () => { fetchData() }
          },
        ],
      );
    }))
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header nav={navigation} />
      <ScrollView style={{ width: "100%" }}>
        <Text style={styles.title}>Modification de l'article n° {articleId}</Text>
        <View style={styles.formArticleAdmin}>
          <Text style={styles.txt}>Titre de l'article :</Text>
          <TextInput
            style={styles.inputAdmin}
            onChangeText={(txt) => setArticle({ ...article, title: txt })}
            value={article ? article.title : ""}
          />
          <Text style={styles.txt}>Contenue de l'article :</Text>
          <TextInput
            multiline
            style={styles.inputContentArticle}
            onChangeText={(txt) => setArticle({ ...article, content: txt })}
            value={article ? article.content : ""}
          />
        </View>
        <View style={styles.btna}>
          <BoutonAdmin text="Modifier"
            onPress={() => editArticle()}
          />
          <BoutonAdmin text="Annuler"
            onPress={() => navigation.navigate('ArticlesAdmin')}
          />
        </View>

        <Text style={styles.titleH2Admin}>Commentaires</Text>
        {comments ? (comments['hydra:member'].map((item, index) => (
          <View style={styles.formCommentsAdmin} key={item.id}>
            <Text style={styles.txt}>N° {item.id} </Text>
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
                setComments({ 'hydra:member': updatedComments });
              }}
              style={styles.inputAdmin}
            />
            <View style={styles.btna}>
              <BoutonAdmin text="Modifier" onPress={() => editComment(item.id)} />
              <BoutonAdmin text="Supprimer" onPress={() =>
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
                        navigation.navigate('ArticleAdmin', { refresh: true, articleId: item.article.id });
                      }),
                    },

                  ],
                )}
              />
            </View>
          </View>
        ))
        ) : (
          <Text>Loading comments...</Text>
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
