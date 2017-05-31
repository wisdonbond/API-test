var mongojs = require("mongojs");
var databaseUrl = '127.0.0.1:27017/clubs';
var collections = 'clubs';
var connect = mongojs(databaseUrl,collections);
module.exports = {
    connect: connect
};
