const commands = require('./commands');

const done= function (output){
  process.stdout.write(output);
  process.stdout.write ('\nprompt > ')
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var args = data.toString().trim().split(' ');
  var cmd = data.toString(); // remueve la nueva línea
//   if(cmd === 'date') {
//     process.stdout.write(Date());  
//   }
//   if(cmd === 'pwd') {
//     process.stdout.write(process.cwd);  
//   }
if (commands [cmd]) {
    commands [cmd](args, done);
} else {
    process.stdout.write (`${cmd}not found`);
}
}); 