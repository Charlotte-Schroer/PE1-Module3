/*Gebruik een variabele hoogte. 
We gaan aan de hand van hoogte een sterrenpiramide bouwen. 
Per laag van de piramide komt er een ster bij. */

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Geef mij een hoogte in: '));
console.log('Dit is uw gekozen hoogte: ' + hoogte);

let ster = '';
for(let i = 0; i<hoogte;i++){
    ster+='*';
    console.log(ster);
}

process.exit();