//Zoek de grootste gemene deler
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let a = parseFloat(await userInput.question('Gebruiker geef mij een getal: '));
let b = parseFloat(await userInput.question('Gebruiker geef mij nog een getal: '));
//Nu proberen de grootste gemene deler te zoeken
//Euclidisch algoritme: ax+by=ggd(a,b)

let ggd;
while(a!=b){
    if(a>b){
        a = a - b;
    }
    else{
        b = b - a;
    }
}
ggd=a;
console.log(ggd);












process.exit();