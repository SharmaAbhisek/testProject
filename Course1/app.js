
//var countdat=require('./count');
//console.log(countdat.count('abhisek'));
// var fs=require('fs');
// var data=fs.readFileSync('./read.txt','utf8');
// console.log(data);
// fs.writeFileSync('write.txt',data);

// var http=require('http');
// var server =http.createServer(function(req,res){
// res.writeHead(200,{'content-type':'text/plain'});
// res.end('hi server');

// });

// server.listen(4000,'127.0.0.1');
// console.log('listening port')

var http=require('http');
var fs=require('fs');
//var readstream=fs.createReadStream(__dirname+'/read.txt','utf8'); // for text

// var readstream=fs.createReadStream(__dirname+'/read.txt');


// readstream.on('data',function(chunk){
//     console.log('new chunk of data');
//     console.log(chunk);
// })


// var readstream=fs.createReadStream(__dirname+'/read.txt');
// var writestream=fs.createWriteStream(__dirname+'/write.txt')

// readstream.pipe(writestream);

