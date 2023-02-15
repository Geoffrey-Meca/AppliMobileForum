import React, { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { postComment } from '../../../api';
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function ModalAddComment(props) {

  const targetId = props.id
  const [NewComment, setNewComment] = useState("");
  console.log('képasa')

  const onChangeComment = (val) => {
    setNewComment(val);
  }
  const AddComment = () => {
    // Controle size of comment 
    if (NewComment.length >= 10) {
      postComment(targetId, NewComment, (res => { 
          props.close()
          props.fetchData()
      }))
    } else {
      alert("Comment too short !")
    }
  }

  return (
    <View style={styles.modalCommentContainer}>
      <Pressable style={{ alignItems: "flex-end", width: "100%" }} onPress={props.onPress}>
        <Text style={styles.closeBtn}><Ionicons name="md-close-sharp" size={24} color="black" /></Text>
      </Pressable>
      <Text style={styles.titleH2Article}>Ajouter un commentaire</Text>
      <TextInput style={styles.inputModalComment}
        editable
        multiline
        onChangeText={onChangeComment}
        numberOfLines={8}
        maxLength={755}
        placeholder={"Votre commentaire ?"}
      />
      <ButtonComponent
        contButon={styles.contenerCenter}
        button={styles.butonStyleLitte}
        txtButton={styles.textButon}
        text={<MaterialIcons name="add" size={24} color="black" />}
        onPress={AddComment}
      />

    </View>
  )
}
