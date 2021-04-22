'use strict';

function JaEllerNej() {

    return new Promise( function(resolve,reject) {
        let tal = Math.round(Math.random() * 1);

        if(tal) {
            resolve('Allt gick bra!');
        }
        else {
            reject('Något gick fel');
        }

    });
}

async function msg() {
    let svar = await JaEllerNej();
    return svar;
}

msg().then(function(x) { 
    console.log(x);
}).catch(function(x) {
    console.log(x);
});

