const debug = true
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
    
    if(debug){
      console.log(targetId);
      console.log(NewComment);
    }
    // Controle size of comment 
    if (NewComment.length >= 10) {

        postComment(targetId, NewComment, (res =>  {
          if(res.status != 201){
           
          } else {
            
          }
      }))
      props.close()
    } else {
      alert("Comment to short !")
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
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
   
        <BoutonApp text="Add" onPress={AddComment}/>
     
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        backgroundColor: "#48CAE4",
        width: "95%",
        height: "auto",
        top: 0,
        borderRadius: 5,
        zIndex: 5
    },
    closeBtn: {
        backgroundColor: "grey",
        textAlign: "center",
        fontSize: 25,
        width: 25,
        height: "auto",
        top: "2.5%",
        left: "93.5%",
        borderTopRightRadius: 5
    
    },
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center",
        marginBottom: "1%",
        paddingBottom: "1%"
      
    },
    input: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '80 %',
        margin: '5%',
        padding: 5,
        height:200, 
        textAlignVertical: 'top',
        order: 0
    },
})