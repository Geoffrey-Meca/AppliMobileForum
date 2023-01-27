import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import {  SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../../assets/styles/styles'
import Header from '../../Composants/Header'
export default function About({ navigation }) {
  return (
<SafeAreaView style={styles.container}>
        <Header nav={navigation} />
        <ScrollView>
          <View style={styles.articleContainer}>
          <Text style={styles.titleH2}>L'équipe de développeurs</Text>
          <Text style={styles.txt}>
            L'équipe CodeHub a concocté un petit forum mobile avec React Native. L’aventure a duré six semaines. Nous sommes passés par plusieurs étapes, que toute aventure humaine rencontre à un moment où un autre de son périple.
            La découverte, l’émerveillement face à l’immensité des espaces créatifs qui s’offraient à nous.
            </Text>
            <Text style={styles.txt}>
            Nous avons parfois fait fausse route, découvrant des profondes vallées jalonnées d'erreurs de script, de logique ou d'algorithme. 
            Mais, finalement après mainte défis relevé, plusieurs phase de perte de la santé mentale de nos deux lead développeurs, l’un pour l’API et l’autre pour React Native, nous sommes arrivé à destination.
          </Text>
          <Text style={styles.titleH3}>L'équipe CodeHub</Text>
          <Text style={styles.txt}>Rany Alo : Lead développeur sur l’API et codeur react émérite.</Text>
          <Text style={styles.txt}>Geoffrey Meca : Lead développeur sur la partie React Native</Text>
          <Text style={styles.txt}>Mathieu Ruiz : Grand codeur react et symfony</Text>
          <Text style={styles.txt}>Christophe Calmes : Maçon CSS, charpenteur React.</Text>
          </View>
        </ScrollView>
</SafeAreaView>
  )
}
