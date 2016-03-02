#!/usr/bin/env node
require('shelljs/global');

var fs            = require('fs')
var child_process = require('child_process');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var files = __dirname.split('/');
files.pop();
file_path = files.join('/')

console.log(file_path)

var current_path = process.cwd();
console.log(current_path);
var home_dir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

if(argv.length < 1){
  return console.log('Usages: exn project_name');
}

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

var files = [
  'node_modules'
];

link();
// unlink();

setTimeout(function(){
  process.chdir( current_path );
  var server = file_path + "/moas/node_modules/.bin/nodemon";
  var clone = 'export MOAS_HOME=' + current_path + ' && ' + server + ' ' + file_path + '/moas/bin/www'
  
  console.log('[SERVER START] ' + clone)
  // Run external tool synchronously
  if (exec(clone).code !== 0) {
    echo('Error: Moa server start failed');
    exit(1);
  }else{
    echo('Success: Moa server start finished!');
  }
}, 200);

echo('');
echo('Congratulations! moan finished!');
echo('');

echo('Have a good day! Moaer');

process.stdin.resume();//so the program will not close instantly

function exitHandler(options, err) {
  unlink();
}
process.on( 'exit', function() {
  console.log( "\nGracefully shutting down from exit" );
  // some other closing procedures go here
  unlink()
  process.exit( );
})

process.on( 'SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  unlink()
  process.exit( );
})

process.on( 'SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  unlink()
  process.exit( );
})



function link(){
  files.forEach(function(file){
    var src   = file_path + '/node_modules/' + file;
    var dest  = current_path + '/' + file;
    fs.appendFileSync('.gitignore',dest+'\n');
    console.log(src + ' - ' + dest);
    _create_symlink(src, file) ;
  });
}

function unlink(){
  console.log('unlink...');
  files.forEach(function(file){
    var src   = file_path + '/moas/' + file;
    var dest  = current_path + '/' + file;
    
    fs.unlinkSync(dest);
  });
}

function _create_symlink(dir, dir_name) {
  var link = require('fs-symlink')
 
  console.log(dir + ' - ' + dir_name);
  link(dir, current_path + '/' + dir_name,  'junction').then(function () {
    console.log('copy modudle ' + dir_name + ' finished');
  })
}
