'use strict'
var ghpages = require('gh-pages');
var mensaje_commit = process.argv[2];
if(mensaje_commit){
    ghpages.publish(`${__dirname}/../_book`,{
        message: mensaje_commit
        } ,(error)=> {
        if(error) {
            console.error('Algo salió mal :(');
        }else {
            console.log('gh-pages actualizado');
        }
    });
}else {
    console.error('Indica el mensaje de commit');
}
