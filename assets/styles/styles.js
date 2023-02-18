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
        marginLeft: "5%"
    },
    contenerProfil: {
        width: "100%",
        alignItems: 'baseline',
        marginLeft: "2%"
       
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
    tinyText: {
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: "justify",
        padding: "1%"
    },
    labelText: {
        fontSize: 15,
        color: "#FFFFFF",
        marginRight: "0%"
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
    OneLineAdmin: {
        width: "100%",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    OneLineP: {
        flexDirection: "row-reverse",
        alignItems: "baseline",
        flexWrap: "wrap",

    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX FORMULAIRE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    formContainer: {
        width: "100%",
        alignItems: 'center',

    },
    /*XXXXXXXXXXXInputWXXXXXXXXXXXX*/
    input: {
        backgroundColor: "#F0F0F0",
        borderWidth: 1,
        borderRadius: 3,
        width: '80 %',
        height: 42,
        margin: '5%',
        paddingLeft: 15,
    },
    inputContentArticle: {
        width: "98%",
        marginTop: "5%",
        paddingHorizontal: "5%",
        paddingVertical: "5%",
        borderWidth: 1,
        borderRadius: 19,
        backgroundColor: "#F0F0F0",
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX BUTTON XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
    butonStyleLarge: {
        width: '75%',
        height: 42,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#CAF0F8",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: "5%",
    },
    butonDangerous: {
        width: 35,
        height: 35,
        //borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#F74823",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        paddingHorizontal: "5%",
    },
    butonStyleIcon: {
            width: 35,
            height: 35,
            //borderWidth: 2,
            borderRadius: 10,
            backgroundColor: "#CAF0F8",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
            paddingHorizontal: "5%",
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
        width: '45%',
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
    box: {
        width: "100%",
        borderBottomColor: "rgba(255, 255, 255, 0.60)",
        borderBottomWidth: 1
    },

    linkArticle: {
        color: "#FFFFFF",
        fontSize: 25,
        marginBottom: "2%",
        marginTop: "1%",
        textAlign: "right",
        fontFamily: 'Iceland_400Regular'
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
    },
    inputArticle: {
        backgroundColor: "#F0F0F0",
        borderWidth: 1,
        borderRadius: 3,
        width: '100 %',
        height: "auto",
        paddingLeft: 15,
        marginBottom: "25%"
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX COMMENTS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
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
        alignSelf: "center",
        backgroundColor: "#023E8A",
        width: "95%",
        height: "auto",
        top: "20%",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    modalCommentContainer: {
        height: "auto",
        position: "absolute",
        alignSelf: "center",
        backgroundColor: "#48CAE4",
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        top: '1%',
        zIndex: 1,
        borderRadius: 5,
    },
    closeBtn: {
        backgroundColor: "grey",
        textAlign: "center",
        fontSize: 26,
        width: 30,
        borderTopRightRadius: 5
    },
    inputModalComment: {
        backgroundColor: "#F0F0F0",
        borderWidth: 1,
        borderRadius: 5,
        width: "95%",
        height: "auto",
        textAlignVertical: 'top',
        marginTop: "2%",
        marginBottom: "0%"
    },

    /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX PANEL ADMIN XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

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
    formArticleAdmin: {
        alignItems: "center"
    },

    infoUserAdmin: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
    },
    linkUserAdmin: {
        color: "#FFFFFF",
        fontSize: 15,
    },
    label: {
        color: "#fff",
        fontSize: 18,
    },
    /*XXXXXXXXXXXTITLEXXXXXXXXXXX*/
    H1B: {
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
    titleH3: {
        color: '#FFFFFF',
        fontSize: 25, 
        paddingBottom: "5%", 
        fontFamily: 'Iceland_400Regular', 
        textAlign: "center"
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
    titleH2Admin: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: "center",
        marginBottom: "5%"
    },
    titleH3: {
        color: '#FFFFFF',
        fontSize: 26,
        margin: 30,
        textAlign: 'center',
        fontFamily: 'Iceland_400Regular'
    },
    titleInputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "8%"
    },
    /*XXXXXXXXXXXXXXXXXXXXXXXXXBURGERSTYLEXXXXXXXXXXXXXXXXXXX*/
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f6f6f6",
        marginBottom: 20
    },
    imgDrawer: {
        width: 60,
        height: 60,
        radius: 30
    },
    headerTxt: {
        margin: 5
    },
    linkText: {
        color: "red",
        fontSize: 30
    },
    footer: {
        position: "absolute",
        width: "100%",
        height: "10%",
        bottom: 0,
        backgroundColor: "#f6f6f6",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    hidden: {
        display: "none"
    }

})

module.exports = styles