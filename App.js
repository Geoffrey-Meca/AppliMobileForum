import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import LandingScreen from './src/Screens/ScreenHome';
import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getArticles } from './api';

export default function App() {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      getArticles()
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LandingScreen />
      <View>
      {data ? (
      data['hydra:member'].map(item => (
        <Text>{item.title}</Text>
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