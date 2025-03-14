const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Sirve los archivos estáticos de la aplicación de React
app.use(express.static(path.join(__dirname, 'front-end/App_web/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end/App_web/dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
