var xtorrent = require("xtorrent");
var express = require("express");
var app = express();

app.get("/robot", function(req, res){
  xtorrent.search({query:"Mr robot"}).then(function (data) {
      var resultArray = new Array();
      for (d in data) {
          if (data[d].title.includes("E11") == true) {
            resultArray.push(" " + data[d].title);
          }
      }
      if (resultArray.length == 0) {
        res.send("No new episodes yet :(");
      } else {
        console.log("Result array: " + resultArray);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        for (r in resultArray) {
          res.write("Found Episode: " + resultArray[r] + "\n");
        }
        res.end();
      }
  });
});

app.get("/bachelor", function(req, res){
  xtorrent.search({query:"Bachelor in paradise"}).then(function (data) {
      var resultArray = new Array();
      for (d in data) {
          if (data[d].title.includes("E11") == true) {
            resultArray.push(" " + data[d].title);
          }
      }
      if (resultArray.length == 0) {
        res.send("No new episodes yet :(");
      } else {
        console.log("Result array: " + resultArray);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        for (r in resultArray) {
          res.write("Found Episode: " + resultArray[r] + "\n");
        }
        res.end();
      }
  });
});

app.listen(80, function(){
  console.log("Started!")
});
