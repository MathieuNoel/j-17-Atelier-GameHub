const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', '/var/www/html/S3/S03E06-Atelier-GameHub--MathieuNoel/views');
app.use(express.static('./public'));
const data = require(`./games.json`);
console.log(data)

app.get(`/`, (req, res) => {
  res.render(`index`, {
    data: data,

  });
})

app.get(`/game/:gameName`, (req,res, next) => {
  const gameName = req.params.gameName;
  const goodGame = data.find(game => data.name === gameName);
  res.render(gameName, {
    choiceGame: goodGame,
    
  });
  if(!goodGame) next()
})

app.use((req, res) => {
  res.status(404).send("Erreur : 404 not found !");
});

app.listen(3000, () => {
    console.log(`Express app listening on port ${3000}`);
});
