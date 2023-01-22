import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native';
import BoutonAdmin from '../../Composants/Bouton/indexAdmin';
import Header from '../../Composants/Header';
import { patchComment, deleteComment, getCommentsByArticle, patchArticle, getArticleById } from '../../../api';
import Pagination from '../../Composants/Pagination';

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
        <View style={styles.formArticle}>
          <Text style={styles.txt}>Titre de l'article :</Text>
          <TextInput
            style={styles.input}
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
        <View style={styles.btn}>
          <BoutonAdmin text="Modifier"
            onPress={() => editArticle()}
          />
          <BoutonAdmin text="Annuler"
            onPress={() => navigation.navigate('ArticlesAdmin')}
          />
        </View>

        <Text style={styles.titleH2}>Commentaires</Text>
        {comments ? (comments['hydra:member'].map((item, index) => (
          <View style={styles.formComments} key={item.id}>
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
              style={styles.input}
            />
            <View style={styles.btn}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0077B6",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    margin: 30,
    fontFamily: 'Iceland_400Regular',
    textAlign: "center"
  },
  formArticle: {
    alignItems: "center"
  },
  titleH2: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: "center",
    marginBottom: "5%"
  },
  formComments: {
    alignItems: "center"
  },
  txt: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 3,
    width: '90 %',
    height: 42,
    margin: '5%',
    paddingLeft: 15
  },
  inputContentArticle: {
    width: "98%",
    marginTop: "5%",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    borderWidth: 1,
    backgroundColor: "#00B4D8"
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    margin: "5%"
  }
})
