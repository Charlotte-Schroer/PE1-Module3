/*Schrijf een script dat aan de gebruiker vraagt om een getal in te geven. 
Het script zal gemiddelde van de ingegeven getallen bijhouden en telkens afdrukken. 
Het script stopt wanneer de het gemiddelde boven 25 gaat.*/

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let i = 0;
let j = 1;
let som = 0
let gemiddelde;

do{i=parseFloat(await userInput.question('Geef mij een getal '));
    som+=i; 
    gemiddelde = som/j;
    console.log('Het gemiddelde is: ' + gemiddelde)
    j++;
} while (gemiddelde < 25){
    console.log('Het gemiddelde is groter dan 25: Einde');
}



//condition gemiddelde > 25;
//initialization i = 0;
// iteration j++;

process.exit();