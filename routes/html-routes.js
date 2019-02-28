var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  //the routes aren't complete because the file path hasn't been fully established

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../survey.html"));
  });

  app.get("/results", function
  (req, res){
      res.sendFile(path.join(__dirname, "../results.html"))
  });
}
