'use strict'
var ghpages = require('gh-pages');

ghpages.publish(`${__dirname}/../_book`, (error)=> {
    if(error) {
        console.log('Algo salió mal :(');
    }else {
        console.log('gh-pages actualizado');
    }
});
