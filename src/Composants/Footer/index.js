import React from 'react'
import { Text , StyleSheet} from 'react-native';


const today=new Date();
const year = today.getFullYear();

export default function Footer() {

    return (
        <Text style={stylesFooter.text}>Copyrigth {year} Coucou</Text>
    )
}
const stylesFooter = StyleSheet.create({
    text: {
        position: "absolute",
        bottom: 0,
        height:50,
        paddingTop: 15,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#0096C7",
        color: "#FFFFFF"
        }
})