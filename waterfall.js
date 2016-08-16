/**
 * Created by TBtuo on 16/08/16.
 */
const http = require('http');
const fs = require('fs');
const async = require('async');

/*
async.waterfall([
    
    function (cbreadfile) {
        let filepath = process.argv[2];
        fs.readFile(filepath,'utf-8', function (err, data) {
            if (err) return cbreadfile(err);
            cbreadfile(null,data)
        })
    },

    function(datarecuperer, cbhttpget){
        var body = '';
        http.get(datarecuperer.toString().trimRight(), function(res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });

            res.on('end', function(chunk){
                cbhttpget(null, body);
            });
        }).on('error', function(e){
            cbhttpget(e);
        });
    }
], function (err,resultat) {
    if (err) return console.error(err);
    console.log(resultat)
    }
);*/

/*async.waterfall([
    function readFile(readFileCallBack) {
        fs.readFile(process.argv[2], readFileCallBack)
    },
    function porcessHttpGet(file,httpGetCallBack) {
        var body = '';
        http.get(file.toString(),function (res) {
            res.on('data',function (chunk) {
                body += chunk.toString();
            });

            res.on('end',function (chunk) {
                httpGetCallBack(null,body)
            })
        }).on('errors',function (e) {
            httpGetCallBack(e)
        })
    }
], function (err, resultat) {
    if (err) return console.error(err);
    console.log(resultat)
    }
);*/

/**
 *
 */
async.waterfall([
        /**
         *
         * @param readFileCallBack
         */
    (readFileCallBack) => fs.readFile(process.argv[2], readFileCallBack),
        /**
         *
         * @param file
         * @param httpGetCallBack
         */
    (file,httpGetCallBack) => {
        var body = '';
        http.get(file.toString(), res => {
            res.on('data', chunk => body +=chunk.toString());
            res.on('end', chunk => httpGetCallBack(null,body))
        }).on('error', e => httpGetCallBack(e))
    }
],(err,result) => {
    if (err) throw new Error;
    console.log(result)
    }
);











































