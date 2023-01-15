const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ base } ${'x'.brightMagenta} ${i} ${'='.brightMagenta} ${base * i}\n`;
    }

    if (listar) {
      console.log("=============================".brightMagenta);
      console.log("Tabla del:".brightMagenta, colors.green(base));
      console.log("=============================".brightMagenta);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err
  }
};

module.exports = {
  crearArchivo,
};
