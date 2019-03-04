const path = require('path');

const resultsArray = require("../models/results");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    // let userObject = {};

    // app.get("/api/results", function(req, res) {
    //     userObject.biome = res[0].biome
      
    //   res
      
    // }).then(function(){
    //     app.get(){
    //         //sequel query 
    //     }
    // })

    app.post("/api/results", function(req, res) {
        for (let i = 0; i<resultsArray.length; i++){
            const results = resultsArray[i]
        }
    });
}