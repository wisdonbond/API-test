var app = require('express')();
var port = process.env.PORT || 7777;
var MongoClient = require('mongodb').MongoClient;

app.get('/all', function (req, res) {
MongoClient.connect("mongodb://localhost:27017/clubs", function(err, db) {
var collection = db.collection('clubs3');
 collection.find().toArray(function(err, items) {
                console.log(items);
                res.json(items); 
             });

db.close();
});


});


app.get('/club/:name', function (req, res) {
var name = req.params.name;
MongoClient.connect("mongodb://localhost:27017/clubs", function(err, db) {
var collection = db.collection('clubs3');
 collection.find({name:name}).toArray(function(err, items) {
                console.log(items);
                res.json(items); 
             });

db.close();
});
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});