'use strict';
const fs = require('fs');

//"Main" i java
console.log('startar main');
replace().then(function(msg) {

    console.log('KLART');

});
console.log('main fortsätter');






async function replace() {

    console.log('start filinläsning');
    let megaFil = await fs.readFileSync('stor-fil.txt').toString();
    console.log('fil-läsning klar');
    console.log('börjar beräkningar');
    for(let i=0; i<1000; i++) {
        for(let j=0; j<megaFil.length; j++) {
            //Göra några beräkningar...
        }
    } 
    console.log('beräkningar klara');
    return Promise.resolve('tjo!');
}