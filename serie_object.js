/**
 * Created by tuo on 16/8/16.
 */
/*
* Write a program that will receive two URLs as the first and second command-line arguments.

 Using http.get, create a GET request to these URLs and pass the response body to the callback.

 Pass in an object of task functions, using the property names requestOne and requestTwo, to async.series.

 console.log the results in the callback for series when all the task functions have completed.*/

const http = require('http');
const async = require('async');

/*async.series({
    requestOne: function (done) {
        fetchURL(process.argv[2], done)
    },
    requestTwo: function (done) {
        fetchURL(process.argv[3], done)
    }
},
    function done(err, result) {
        if (err) return console.error(err)
        console.log(result)
    }
);

function fetchURL(url, done) {
    var body = '';
    http.get(url, function(res){
        res.on('data', function(chunk){
            body += chunk.toString();
        });

        res.on('end', function(chunk){
            done(null, body);
        });
    }).on('error', function(e){
        done(e);
    });*/

async.series({
    requestOne : done => fetchURL(process.argv[2], done),
    requestTwo : done => fetchURL(process.argv[3], done)
    },
    (err,result) => {
        if (err) return console.log(err);
        console.log(result)
    }
);

var fetchURL = (url, done) => {
    var body = '';
    http.get(url, res =>{
        res.on('data',chunk=> body += chunk.toString());
        res.on('end', chunk=> done(null,body))
    }).on('error', e=> done(e))
};






















