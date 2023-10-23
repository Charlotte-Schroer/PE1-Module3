//Rij van Fibionacci

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Gebruiker geef mij een getal: '));
let i=0;
let j=1;
console.log(i);
console.log(j);
for(let k = 2; k<=getal; k++){
    k = i + j;
    console.log(k);
    i = j;
    j = k;
}

process.exit();