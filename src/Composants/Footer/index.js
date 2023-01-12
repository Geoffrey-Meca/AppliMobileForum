import React, { Fragment } from 'react'
import { Text , StyleSheet, View} from 'react-native';

export default function Footer() {
    const today=new Date();
    const year = today.getFullYear();
    return (
        (year == 2023 ? (
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.text}>Copyright {year}</Text>
            </View>
        </Fragment>
            ):(
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.text}>Copyright 2023 - {year}</Text>
            </View>
        </Fragment>
        ))
    )
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        justifyContent: "center",
        height:"10%",
        width: "100%",
        backgroundColor: "#0096C7",
    },
    text: {
        
        textAlign: "center",
        
        color: "#FFFFFF"
        }
})