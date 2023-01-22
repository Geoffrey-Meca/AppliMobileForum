import React, { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { postComment } from '../../../api';
import BoutonApp from '../Bouton'
import styles from '../../../assets/styles/styles'

export default function ModalAddComment(props) {

  const targetId = props.id
  const [NewComment, setNewComment] = useState("");
  const onChangeComment = (val) => {
    setNewComment(val);
  }
  const AddComment = () => {
    // Controle size of comment 
    if (NewComment.length >= 10) {

      postComment(targetId, NewComment, (res => { }))
      props.close()
    } else {
      alert("Comment too short !")
    }
  }

  return (
    <View style={styles.modalCommentContainer}>
      <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
        <Text style={styles.closeBtn}>X</Text>
      </Pressable>
      <Text style={styles.titleModal}>Ajouter un commentaire</Text>
      <TextInput style={styles.inputModalComment}
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
