const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist/galeria-web'));

//PathLocationStrategy

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/galeria-web/index.html'));
})

console.log('[Server] Console listening!');

app.listen(process.env.PORT || 8080, ()=>{
  console.log('[Server] Server started!');
});
