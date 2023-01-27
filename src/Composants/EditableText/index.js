import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../../assets/styles/styles';
import ButtonComponent from '../Bouton/buttonComponent';

export default function EditableText ({label, value, onChange, onConfirm, onCancel}){
    const [editing, setEditing] = useState(false);
    return (
        <View style={styles.OneLineP}>
            {editing ? (
                <View>
                    <View style={styles.OneLine}>
                        <Text style={styles.labelText}>{label}</Text>
                        <TextInput style={styles.input} value={value} onChangeText={onChange} />
                    </View>
                    <View style={styles.OneLine}>
                        <ButtonComponent
                            contButon={styles.contenerCenter}
                            button={styles.butonStyleLarge}
                            txtButton={styles.textButon}
                            text={"Confirm"}
                            onPress={() => {onConfirm(); setEditing(false)}}
                        />
                        <ButtonComponent
                            contButon={styles.contenerCenter}
                            button={styles.butonStyleLarge}
                            txtButton={styles.textButon}
                            text={"Cancel"}
                            onPress={() => {onCancel(); setEditing(false)}}
                        />
                    </View>
                </View>
            ) : (
                <Text style={styles.txt}>{label} : {value}</Text>
            )}
            {!editing && <ButtonComponent
                        contButon={styles.contenerCenter}
                        button={styles.butonStyleLitte}
                        txtButton={styles.textButon}
                        text={"Edit"}
                        onPress={() => setEditing(true)}
                    />}
                    
        </View>
    )
}