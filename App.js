import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import LandingScreen from './src/Screens/ScreenHome';
import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getArticles } from './api';

export default function App() {

  const [articles, setArticles] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      getArticles((data) => {
        setArticles(data);
      });
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LandingScreen />
      <View>
      {articles ? (
      articles['hydra:member'].map((item, index) => (
        <Text key={index}>{item.title}</Text>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0077B6",
    padding: 20
  }
})