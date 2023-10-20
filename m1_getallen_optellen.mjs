import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
/*Maak een applicatie dat getallen aan de gebruiker vraagt 
en deze optelt bij elkaar zolang het ingegeven getal groter is dan 0. 
Van zodra de gebruiker een getal kleiner of gelijk aan 0 ingeeft print de applicatie de som af.*/

let som = 0;
let getal;

do{getal = parseFloat(await userInput.question('Gebruiker geef mij een getal: '));
som += getal;}
    while(getal>0)
console.log('De som is ' + som);

process.exit();