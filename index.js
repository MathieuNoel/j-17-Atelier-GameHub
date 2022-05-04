// on importe le module express pour pouvoir l'utiliser dans notre fichier
const express = require('express');


// créer le serveur express
const app = express();

// activer le moteur de rendu EJS
app.set('view engine', 'ejs');
// préciser à express où se situe le dossier views
app.set('views', './views/');
// on rend disponible les fichiers statiques
app.use(express.static('./public/'));

// on require notre router
const router = require('./app/router');
// on va rattacher le router créé dans router.js à notre serveur stocké dans app
app.use(router);

// 1er rôle du serveur : faire écouter le serveur sur un port de la machine
// le serveur écoute et intercepte les requêtes HTTP provenant des clients web (navigateurs)
const port = 3002;
app.listen(port, () => console.log(`Le serveur écoute sur le port ${port}`));
