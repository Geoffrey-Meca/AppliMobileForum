import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0077B6",
    },
    formContainer: {
        alignItems: 'center',
        width: "80%",
    },
    contenerLeft: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: "10%"
    },
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        margin: 30,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    input: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '80 %',
        height: 42,
        margin: '5%',
        paddingLeft: 15,
    },
    imgContainer: {
        alignItems: "center"
    },
    textContainer: {
        backgroundColor: "#ADE8F4",
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 20,
        color: "#FFFFFF",
        textAlign: "justify",
        padding: "1%"
    },

    img: {
        width: "90%",
        height: 300,
        borderRadius: 5,
        padding: "1%"
    },
    contenerCenter: {
        alignItems: "center",
        margin:10
    },
    butonStyle: {
        width: '50%',
        height: 42,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#CAF0F8",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: "5%",
    },
    butonStyleLitte: {
        width: '50%',
        height: 42,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#CAF0F8",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: "5%",
    },
    titleH2: {
        color: '#FFFFFF',
        fontSize: 35,
        margin: 15,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    linkArticle: {
        color: "#FFFFFF",
        fontSize: 20,
        marginBottom: 20,
    },
    carreful: {
        fontSize: 15,
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        padding: 10,
        backgroundColor: "#48CAE4",
        marginVertical: "7%",
        height: "auto",

    },
    date: {
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: "5%",
    },
    commentsContainer: {
        marginTop: "5%"
    },
    OneComments: {
        backgroundColor: "#90E0EF",
        marginHorizontal: "3%",
        marginBottom: "5%",
        padding: "2%",
        borderRadius: 5
    },
    articleContainer: {
        height: "auto",
        paddingVertical: "5%",
        paddingHorizontal: "4%"
    },
    Author: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    OneLine: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-evenly"
    },

})

module.exports = styles
