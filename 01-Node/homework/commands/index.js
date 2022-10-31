const fs = require('fs');
const { request } = require('https');

module.exports = {
    pwd: function(args, done) {
        //process.stdout.write(process.cwd); 
        done (process.cwd());
    },
    date: function(args, done) {
       // process.stdout.write(Date());  
       done (Date());
    },
    ls: function(args, done) {
        fs.readdir ('.',function(err, files){
            if (err) throw err;
            // files.forEach(function(file){
            //     process.stdout.write(file.toString() + '\n');
            // })
            let strFiles = '';
            files.forEach(function (file){
                strFiles = strFiles + file + '\n'
            });
            done (strFiles);
            //process.stdout.write('\nprompt > ');
        });
    },
    echo: function(args, done) {
        //process.stdout.write(args.join(' '));
        done (args.join(' '));
    },
    cat: function(args, done) {
        fs.readFile(args[0], function(err, data){
            if (err) throw err;
            // process.stdout.write(data);
            // process.stdout.write('\nprompt > ');
          done (data);  
        });
    },
    head: function(args, done) {
        fs.readFile(args[0],'utf-8', function (err,data) {
            if (err) throw err;
            const firstLines = data.split('\n').slice(0,10).join('\n');
            // process.stdout.write(firstLines);
            // process.stdout.write('\nprompt > ');
            done (firstLines);
        });
    },
    tail: function(args, done) {
        fs.readFile(args[0],'utf-8', function (err,data) {
            if (err) throw err;
            const lastLines = data.split('\n').slice(-10).join('\n');
            // process.stdout.write(firstLines);
            // process.stdout.write('\nprompt > ');
            done (lastLines);
        });
    }, 
    curl: function(args, done) {
        request (args [0], function(err,response, body) {
            if (err)throw err;
            // process.stdout.write(body);
            // process.stdout.write('\nprompt > ');
            done (body);
        });
        },
    };