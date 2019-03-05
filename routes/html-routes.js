const path = require("path");


module.exports = function(app) {

  
  //the routes aren't complete because the file path hasn't been fully established

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/results", function(req, res){
      res.sendFile(path.join(__dirname, "../public/results.html"))
  });
}
