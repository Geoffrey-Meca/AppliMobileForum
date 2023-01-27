import 'react-native-gesture-handler';
// Importation de react
import React from 'react';
// Importation des Pages Screen
import LandingScreen from './src/Screens/ScreenHome';
import About from './src/Screens/ScreenAbout';
import ProfilScreen from './src/Screens/ScreenProfilPage';
import ConnexionScreen from './src/Screens/ScreenConnexion';
import InscriptionScreen from './src/Screens/ScreenInscription';
import IndexArticleScreen from './src/Screens/ScreenIndexArticles';
import ReadArticle from './src/Screens/ScreenIndexArticles/readArticle';
import AddArticleScreen from './src/Screens/ScreenIndexArticles/addArticle';
import AdminScreen from './src/Screens/ScreenPanelAdmin/indexAdmin';
import IndexUsersScreen from './src/Screens/ScreenPanelAdmin/indexUsers';
import UserProfileEditScreen from './src/Screens/ScreenPanelAdmin/indexUser';
import IndexArticlesScreen from './src/Screens/ScreenPanelAdmin/indexArticles';
import ArticleEditScreen from './src/Screens/ScreenPanelAdmin/indexArticle';

// Importation pour la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/Composants/Burger/CustomDrawer';
import { createStackNavigator } from "@react-navigation/stack";

// Importation de la Police
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, refresh: true }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={LandingScreen} />
      <Drawer.Screen name="Articles" component={IndexArticleScreen} />
      <Drawer.Screen name="ReadArticle" component={ReadArticle} />
      <Drawer.Screen name="AddArticle" component={AddArticleScreen} />
      <Drawer.Screen name="Profil" component={ProfilScreen} />
      <Drawer.Screen name="Connexion" component={ConnexionScreen} />
      <Drawer.Screen name="Inscription" component={InscriptionScreen} />
      <Drawer.Screen name="AdminScreen" component={AdminScreen} />
      <Drawer.Screen name="Users" component={IndexUsersScreen} />
      <Drawer.Screen name="User" component={UserProfileEditScreen} />
      <Drawer.Screen name="ArticlesAdmin" component={IndexArticlesScreen} />
      <Drawer.Screen name="ArticleAdmin" component={ArticleEditScreen} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}