import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Composants/Header';
import styles from '../../../assets/styles/styles'
import ButtonComponent from '../../Composants/Bouton/buttonComponent';

export default function AdminScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Header nav={navigation} />
            <Text style={styles.title}>Bienvenue sur le panel admin !</Text>
                <ButtonComponent 
                    contButon={styles.contenerCenter}
                    button={styles.butonStyleLarge}
                    txtButton={styles.textButon}
                    text={"La liste des utilisateurs"}
                    onPress={() => navigation.navigate('Users', { refresh: true })}
                />
                <ButtonComponent 
                    contButon={styles.contenerCenter}
                    button={styles.butonStyleLarge}
                    txtButton={styles.textButon}
                    text={"La liste des articles"}
                    onPress={() => navigation.navigate('ArticlesAdmin', { refresh: true })}
                />
        </SafeAreaView>
    )
}