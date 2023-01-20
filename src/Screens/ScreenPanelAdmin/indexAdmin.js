import { Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BoutonApp from '../../Composants/Bouton'
import Header from '../../Composants/Header';
import Footer from '../../Composants/Footer';

export default function AdminScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.txt}>Bienvenue sur le panel admin !</Text>
            <ScrollView>
                <BoutonApp text="La liste des utilisateurs" onPress={() => navigation.navigate('Users')} />
                <BoutonApp text="La liste des articles" onPress={() => navigation.navigate('ArticlesAdmin')} />
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0077B6",
    },
    txt: {
        fontSize: 30,
        backgroundColor: "#ADE8F4",
        textAlign: 'center',
        marginTop: 10,
    },
})