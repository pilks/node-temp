var temp = require('../lib/temp');
var fs = require('fs');
var spawn = require('child_process').spawn;

temp.write('meow', 'yello weryld', function (err, filePath) {
  if (err) {
    console.error('temp.write error: ', err.toString());
    return;
  }
  
  var ls = spawn('ls', ['-l', filePath]);

  ls.stdout.pipe(process.stdout);
  ls.stderr.pipe(process.stderr);

  ls.on('exit', function (code) {
    console.log('ls exited with code: ', code);
  });
});