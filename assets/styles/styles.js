import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX GLOBAL XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    container: {
        flex: 1,
        backgroundColor: "#0077B6",
    },
    contenerLeft: {
        flex: 1,
        alignItems: "flex-start",
        marginLeft: "10%"
    },
    titleHome: {
        fontSize: 55,
        margin: 20,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        margin: 30,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    titleH2: {
        color: '#FFFFFF',
        fontSize: 35,
        margin: 15,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    imgContainer: {
        alignItems: "center"
    },
    textContainer: {
        backgroundColor: "#ADE8F4",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        padding: "7%"
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
        margin: 10
    },
    date: {
        color: "#FFFFFF",
        fontSize: 16,
        marginTop: "5%",
    },
    OneLine: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX FORMULAIRE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    formContainer: {
        width: "80%",
        alignItems: 'center',

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
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX BOUTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
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
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ARTICLES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    articleContainer: {
        height: "auto",
        paddingVertical: "5%",
        paddingHorizontal: "4%"
    },
    inputArticleContainer: {
        margin: "3%"
    },
    linkArticle: {
        color: "#FFFFFF",
        fontSize: 20,
        marginBottom: 20,
    },
    Author: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    carreful: {
        fontSize: 15,
        textAlign: "center",
        padding: 10,
        backgroundColor: "#48CAE4",
        marginVertical: "7%",

    }, titleInputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "8%"
    },
    titleH2Article: {
        fontFamily: 'Iceland_400Regular',
        color: '#FFFFFF',
        fontSize: 28,
    },
    inputTitleArticle: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '50 %',
        height: "95%",
        paddingLeft: 15,
    },
    inputArticle: {
        backgroundColor: "#F0F0F0",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        width: '100 %',
        height: "auto",
        paddingLeft: 15,
        marginBottom: "25%"
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX COMMENTAIRES XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
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
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX PAGINATION XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    paginationContainer: {
        flexDirection: "row",
        margin: 50,
    },
    btnPagination: {
        alignItems: 'center',
        textAlign: "center",
        backgroundColor: '#CAF0F8',
        height: "auto",
        flex: 1,
        padding: 5,
        marginRight: 5,
        marginLeft: 5,
        borderRadius: 3,
        borderColor: "black"

    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX HEADER XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    headerContainer: {
        width: "100%",
        height: "12%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0096C7",
        paddingHorizontal: "3%",
        zIndex: 1
    },
    txtDate: {
        color: "#fff",
        fontFamily: 'Iceland_400Regular',
        fontSize: 17
    },
    imgHeader: {
        width: "20%",
        height: "80%",
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX MODALS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    modalContainer: {
        position: "absolute",
        backgroundColor: "#023E8A",
        width: "100%",
        height: 400,
        top: "40%"
    },
    containerModalInscription: {
        position: "absolute",
        backgroundColor: "#023E8A",
        width: "100%",
        height: 520,
        top: "30%"
    },
    modalCommentContainer: {
        position: "absolute",
        backgroundColor: "#48CAE4",
        width: "100%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        top: '40%',
        zIndex: 1
    },
    closeBtn: {
        backgroundColor: "grey",
        textAlign: "center",
        fontSize: 26,
        width: 30,
    },
    titleModal: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'Iceland_400Regular'
    },
    inputModalComment: {
        backgroundColor: "#F0F0F0",
        borderWidth: 1,
        borderRadius: 5,
        width: '90 %',
        height: 250,
        textAlignVertical: 'top',
        marginTop: "5%",
    },
    inputModal: {
        backgroundColor: "#F0F0F0",
        borderWidth: 1,
        borderRadius: 3,
        width: '80 %',
        height: 42,
        margin: '5%',
        padding: 5
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX PANEL ADMIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    title: {
        color: '#FFFFFF',
        fontSize: 40,
        margin: 30,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    pageContainerAdmin: {
        borderBottomWidth: 1,
        paddingVertical: "5%"
    },
    infoArticle: {
        flexDirection: "row",
        padding: "5%",
        borderWidth: 1,
        backgroundColor: "#00B4D8",
    },
    articleAdmin: {
        color: "#FFFFFF",
        fontSize: 15,
    },
    btna: {
        flexDirection: "row",
        justifyContent: "center",
        margin: "5%"
    },
    formArticleAdmin: {
        alignItems: "center"
    },
    titleH2Admin: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: "center",
        marginBottom: "5%"
    },
    inputAdmin: {
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
    infoUserAdmin: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    linkUserAdmin: {
        color: "#FFFFFF",
        fontSize: 15,
    },
    label: {
        color: "#fff",
        fontSize: 18,
    },
})

module.exports = styles
