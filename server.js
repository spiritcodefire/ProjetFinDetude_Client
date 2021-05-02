const express = require('express') ; 
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 5555 ;

const app = express() ;

app.use(express.json()) ;

app.use(express.static('client/build')) ; // ici on ouvre la porte pour que express puisse aller dans mon Réact. 


//on va envoyer toute les adresses qu'il ne connait pas, il les envoi sur index.html de notre client
app.get('/*', (req, res) =>{ 
    res.sendFile(path.join(__dirname, './client/build/index.html'))  
});

app.listen(PORT, () => {
    console.log(`le serveur est lancé sur le port : ${PORT}`)
});
