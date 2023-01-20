import 'react-native-gesture-handler';
// Importation de react
import React from 'react';
// Importation des Pages Screen
import LandingScreen from './src/Screens/ScreenHome';
import ProfilScreen from './src/Screens/ScreenProfilPage';
import IndexArticleScreen from './src/Screens/ScreenIndexArticles';
import ConnexionScreen from './src/Screens/ScreenConnexion';
import InscriptionScreen from './src/Screens/ScreenInscription';
import ReadArticle from './src/Screens/ScreenIndexArticles/readArticle';
import AdminScreen from './src/Screens/ScreenPanelAdmin/indexAdmin';
import IndexUsersScreen from './src/Screens/ScreenPanelAdmin/indexUsers';
import UserProfileEditScreen from './src/Screens/ScreenPanelAdmin/indexUser';
import IndexArticlesScreen from './src/Screens/ScreenPanelAdmin/indexArticles';
import ArticleEditScreen from './src/Screens/ScreenPanelAdmin/indexArticle';
// Importation pour la navigation
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {

return (
  <NavigationContainer>
  <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={LandingScreen} />
        <Drawer.Screen name="Articles" component={IndexArticleScreen} />
        <Drawer.Screen name="ReadArticle" component={ReadArticle} />
        <Drawer.Screen name="Profil" component={ProfilScreen} />
        <Drawer.Screen name="Connexion" component={ConnexionScreen} />
        <Drawer.Screen name="Inscription" component={InscriptionScreen} />
        <Drawer.Screen name="AdminScreen" component={AdminScreen} />
        <Drawer.Screen name="Users" component={IndexUsersScreen} />
        <Drawer.Screen name="User" component={UserProfileEditScreen} />
        <Drawer.Screen name="ArticlesAdmin" component={IndexArticlesScreen} />
        <Drawer.Screen name="ArticleAdmin" component={ArticleEditScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}