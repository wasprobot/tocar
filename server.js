var express = require("express");
var serveStatic = require("serve-static");
var app = express();
app.use(serveStatic(__dirname + "/dist"));

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

var port = process.env.PORT || 3000;
app.listen(port);
console.log("server started " + port);
