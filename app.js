const { crearArchivo } = require('./helpers/multipicar.js');
const  argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();


console.log(argv);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( err ))