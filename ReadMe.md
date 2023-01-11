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

# Requête local:

    Pour faire fonctionner les requêtes:

      Ouvrir un terminal et faire écrire ipconfig.
      Récuperer l'ipv4 et la coller dans le fichier api.js situé à la racine du projet

      La syntaxte pour requêter l'api est la suivante:
        axios.get(`${API_URL}/articles?page=1`)

      Pour ensuite récuperer les données, il suffit d'ajouter un .then() avec fonction fléché avec paramètre res.
      Et pour retourné une erreur si il y en a, ajouté à la fin .catch() avec fonction fléch" avec paramètre err.

      Voiçi un example ci-dessous:
        axios.get(`${API_URL}/comments?page=1`)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error)
        })


    
# Pour les dev sous linux :

    Dans le terminal dans le répertoire de l'app lancer : npx expo go puis scanner le QR code ou la fonction a qui permet d'avoir l'application sur l'émulateur.