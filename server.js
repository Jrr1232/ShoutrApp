const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// Initializes Sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const { strict } = require("assert");
// const routes = require('./controllers');
const sequelize = require("../project-two/config/connection");
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // cookie sent to the client to keep certain information. every route has access to the session.
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    //
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    sameSite: "strict"
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.json({ message: "hellow world" });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
