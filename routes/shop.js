const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, "views", "shop.pug"));
  res.render("shop", { products, pageTitle: "My Shop 2", path: "/" });
});

module.exports = router;
