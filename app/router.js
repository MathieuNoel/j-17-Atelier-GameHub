// on importe le module express car on en a besoin pour créer le router
const express = require('express');

// on appelle la méthode Router() de express pour qu'il nous retourne un objet router
const router = express.Router();

// on importe notre tableau de jeu
const games = require('../games.json');

// paramétrer mon router
router.use((req, res, next) => {
    // passer à la future vue (peu importe laquelle c'est) notre tableau de jeux
    res.locals.games = games;
    // passer le relais au prochain router.get()
    next();
});

// page d'accueil
router.get('/', (req, res) => {
    console.log(req.ip);
    console.log(req.path);
    console.log(new Date().toJSON());
    // renvoyer la vue index.ejs au client
    // la méthode render fait 2 choses :
    // 1. elle interprete le code EJS et le transforme en HTML
    // 2. elle renvoie le HTML au client
    res.render('index');
});

// page du jeu de la fourchette
// router.get('/game/fourchette', (req, res) => {
//     res.render('fourchette');
// });

// page du jeu Dice Roller
// router.get('/game/diceRoller', (reqs, res) => {
//     res.render('diceRoller', {
//         diceRoller: true
//     });
// });

// page de jeu

router.get('/game/:name', (req, res) => {
    // rôle : renvoyer la bonne vue en focntion du jeu précisé dans la route
    
    // récupérer le nom du jeu dans la route
    const nameGame = req.params.name;
    // vérifier si le jeu existe bien
    const game = games.find(g => g.name === nameGame);
    if(!game) return res.status(404).send("Erreur 404 : Page non trouvée !");
    // if(!game) return res.redirect('/');
    res.render(nameGame, {
        game
        // pareil que game:game, c'est la syntaxe raccourcie d'ES6+
    });
    
})

router.use((req, res) =>{
    res.status(404).render(`404`);
  });

// on exporte le router pour le rendre disponible dans index.js
module.exports = router;