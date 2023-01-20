const debug = false
import React, { useState } from 'react'
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { postComment } from '../../../api';
import BoutonApp from '../Bouton'

export default function ModalAddComment(props) {

  const targetId = props.id
  const [NewComment, setNewComment] = useState("");
  const onChangeComment = (val) => {
    setNewComment(val);
  }
  const AddComment = () => {

    if (debug) {
      console.log(targetId);
      console.log(NewComment);
    }
    // Controle size of comment 
    if (NewComment.length >= 10) {

      postComment(targetId, NewComment, (res => { }))
      props.close()
    } else {
      alert("Comment too short !")
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
        <Text style={styles.closeBtn}>X</Text>
      </Pressable>
      <Text style={styles.title}>Ajouter un commentaire</Text>
      <TextInput style={styles.input}
        editable
        multiline
        onChangeText={onChangeComment}
        numberOfLines={8}
        maxLength={755}
        placeholder={"Votre commentaire ?"}
      />

      <BoutonApp text="Add" onPress={AddComment} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#48CAE4",
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  closeBtn: {
    backgroundColor: "grey",
    textAlign: "center",
    fontSize: 26,
    width: 30,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    textAlign: "center",
    fontFamily: 'Iceland_400Regular'
  },
  formComment: {
    width: "100%",
    marginTop: "5%"
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: '90 %',
    height: 250,
    textAlignVertical: 'top',
    marginTop: "5%",
  },
})