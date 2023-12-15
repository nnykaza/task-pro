const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let users = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = { username, password, tasks: [] };
  users.push(user);
  res.redirect('/login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    res.redirect('/dashboard?username=' + username);
  } else {
    res.redirect('/login?error=true');
  }
});

app.get('/dashboard', (req, res) => {
  const username = req.query.username;
  const user = users.find((u) => u.username === username);
  if (user) {
    res.sendFile(__dirname + '/dashboard.html');
  } else {
    res.redirect('/login');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
