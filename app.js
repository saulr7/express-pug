const express = require("express");
const app = express();
const expressHbs = require("express-handlebars");

// Handlerbars
// app.engine("handlebars", expressHbs());
// app.set("view engine", "handlebars");

// PUB
app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(express.json());
app.use(express.static("public"));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((_, res) => {
  res.status(404).render("404", { pageTitle: "404" });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
