import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BoutonApp from '../../Composants/Bouton'
import Header from '../../Composants/Header';
import styles from '../../../assets/styles/styles'

export default function AdminScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.titleHome}>Bienvenue sur le panel admin !</Text>
            <View style={{ width: "100%", marginTop: "25%" }}>
                <BoutonApp text="La liste des utilisateurs" onPress={() => navigation.navigate('Users')} />
                <BoutonApp text="La liste des articles" onPress={() => navigation.navigate('ArticlesAdmin')} />
            </View>
        </SafeAreaView>
    )
}