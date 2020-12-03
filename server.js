const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./models')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json())

// Send every other request to the React app
require('./routes/api-routes.js')(app);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({force: false}).then(() => {
  db.SavedBooks.findAll().then((result) => {
      if (result.length === 0) {
          seed(listen);
      } else listen();
  });
});

function seed(callback) {
  fs.readFile('db/seed.json', 'utf8').then((data) =>
      db.SavedBooks.bulkCreate(JSON.parse(data)).then(callback)
  );
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});