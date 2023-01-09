# AppliMobileForum

# Télécharger les extensions VScode:
  
  Pour le bon déroulement du projet assurez-vous de avoir télécharger et activer les extensions suivantes:
  
    ES7+React/redux/React-nativeSnnipets (7m de téléchargements)
    Prettier
    ESLint
    
    

# Télécharger l'appli expo go sur mobile.
 ou
  Télécharger Android Studio pour émuler un smartphone sur ordinateur:

    https://developer.android.com/studio
  
    Une fois le logiciel installé, 
  
    Cliquer directement sur les trois petits points en haut à droite de l'onglet "Get from VCS" (ne pas créer de nouveau projet)
  
    Sélectioner "Virtual Device Manager"
  
    Lancer le device déja présent ou en créer un nouveau.
    
    
    
# Importer les composants:

  npm install
  
  
  
# Lancer l'emulation:
 
    Lancer le script android:
    
      npm run android
      
      Si vous avez choisi de télécharger l'application expo go sur mobile, flashez le QR code.
      
      Sinon, si vous avez bien ouvert le device en premier la connexion est automatique.
      (En cas de problème en dessous du QRcode il y a une addresse "exp://........." copiez là dans l'émulateur)
    
# Pour les dev sous linux :

    Dans le terminal dans le répertoire de l'app lancer : npx expo go puis scanner le QR code ou la fonction a qui permet d'avoir l'application sur l'émulateur.
