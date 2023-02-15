import React from 'react'
import { Pressable, Text, View } from 'react-native'
export default function ButtonComponent(props) {
    return (
        <View style={props.contButon}>
            <Pressable style={props.button} onPress={props.onPress}>
                <Text style={props.txtButton}>{props.text}</Text>
            </Pressable>
        </View>
    )
}
